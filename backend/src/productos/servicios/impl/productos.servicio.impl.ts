import {
  Injectable,
  Inject,
  NotFoundException,
  ConflictException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { IProductosServicio } from '../interfaces/productos.servicio.interfaz';
import { IProductoRepositorio, ResultadoPaginado } from '../../repositorios/producto.repositorio.interfaz';
import { CrearProductoDto } from '../../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../../dtos/consulta-paginacion.dto';
import { ProductoDocumento, EstadoProducto } from '../../entidades/producto.entidad';

/**
 * Implementación concreta del servicio de productos.
 * Contiene toda la lógica de negocio para la gestión de productos.
 * Depende de la interfaz IProductoRepositorio (no de la implementación).
 */
@Injectable()
export class ProductosServicioImpl implements IProductosServicio {
  private readonly logger = new Logger(ProductosServicioImpl.name);

  constructor(
    @Inject('PRODUCTO_REPOSITORIO')
    private readonly productoRepositorio: IProductoRepositorio,
  ) {}

  /**
   * Crea un nuevo producto con validaciones de negocio robustas.
   * Reglas:
   * - El SKU debe ser único en todo el sistema
   * - Si la cantidad es 0, el estado se establece como AGOTADO automáticamente
   * - El precio debe ser mayor a 0 para productos activos
   */
  async crearProducto(crearProductoDto: CrearProductoDto): Promise<ProductoDocumento> {
    this.logger.log(`Creando producto con SKU: ${crearProductoDto.sku}`);

    // Validar unicidad del SKU
    const productoExistente = await this.productoRepositorio.buscarPorSku(
      crearProductoDto.sku,
    );
    if (productoExistente) {
      throw new ConflictException(
        `Ya existe un producto con el SKU "${crearProductoDto.sku}". Cada producto debe tener un SKU único.`,
      );
    }

    // Regla de negocio: si cantidad es 0, estado debe ser AGOTADO
    const datosProducto = { ...crearProductoDto };
    if (datosProducto.cantidad === 0) {
      datosProducto.estado = EstadoProducto.AGOTADO;
      this.logger.warn(`Producto ${datosProducto.sku} creado con cantidad 0, estado establecido a AGOTADO`);
    }

    // Regla de negocio: precio debe ser > 0 para productos activos
    if (datosProducto.estado === EstadoProducto.ACTIVO && datosProducto.precio <= 0) {
      throw new BadRequestException(
        'Un producto activo debe tener un precio mayor a 0.',
      );
    }

    const productoCreado = await this.productoRepositorio.crear(datosProducto);
    this.logger.log(`Producto creado exitosamente: ${productoCreado.id}`);
    return productoCreado;
  }

  /**
   * Obtiene un producto por su ID. Lanza excepción si no existe.
   */
  async obtenerProductoPorId(id: string): Promise<ProductoDocumento> {
    const producto = await this.productoRepositorio.buscarPorId(id);
    if (!producto) {
      throw new NotFoundException(
        `No se encontró ningún producto con el ID "${id}".`,
      );
    }
    return producto;
  }

  /**
   * Obtiene productos paginados aplicando filtros opcionales.
   */
  async obtenerProductosPaginados(
    consulta: ConsultaPaginacionDto,
  ): Promise<ResultadoPaginado<ProductoDocumento>> {
    const { pagina = 1, limite = 10, ...filtros } = consulta;

    this.logger.log(`Consultando productos - Página: ${pagina}, Límite: ${limite}`);
    return this.productoRepositorio.buscarTodosPaginado(pagina, limite, filtros);
  }

  /**
   * Actualiza un producto existente con validaciones de integridad.
   * Reglas:
   * - Si se cambia el SKU, se valida unicidad
   * - Si la cantidad llega a 0, el estado se actualiza a AGOTADO
   * - Si la cantidad pasa de 0 a >0 y estaba AGOTADO, se reactiva
   */
  async actualizarProducto(
    id: string,
    actualizarProductoDto: ActualizarProductoDto,
  ): Promise<ProductoDocumento> {
    this.logger.log(`Actualizando producto con ID: ${id}`);

    // Verificar que el producto existe
    const productoActual = await this.obtenerProductoPorId(id);

    // Si se cambia el SKU, verificar unicidad
    if (
      actualizarProductoDto.sku &&
      actualizarProductoDto.sku !== productoActual.sku
    ) {
      const productoConSku = await this.productoRepositorio.buscarPorSku(
        actualizarProductoDto.sku,
      );
      if (productoConSku) {
        throw new ConflictException(
          `Ya existe otro producto con el SKU "${actualizarProductoDto.sku}".`,
        );
      }
    }

    // Regla de negocio: ajustar estado según cantidad
    const datosActualizacion = { ...actualizarProductoDto } as any;
    if (datosActualizacion.cantidad !== undefined) {
      if (datosActualizacion.cantidad === 0) {
        datosActualizacion.estado = EstadoProducto.AGOTADO;
      } else if (
        productoActual.estado === EstadoProducto.AGOTADO &&
        datosActualizacion.cantidad > 0
      ) {
        datosActualizacion.estado = EstadoProducto.ACTIVO;
        this.logger.log(`Producto ${id} reactivado: stock restaurado a ${datosActualizacion.cantidad}`);
      }
    }

    // Regla de negocio: precio > 0 para productos activos
    const estadoFinal = datosActualizacion.estado || productoActual.estado;
    const precioFinal = datosActualizacion.precio ?? productoActual.precio;
    if (estadoFinal === EstadoProducto.ACTIVO && precioFinal <= 0) {
      throw new BadRequestException(
        'Un producto activo debe tener un precio mayor a 0.',
      );
    }

    const productoActualizado = await this.productoRepositorio.actualizar(
      id,
      datosActualizacion,
    );

    if (!productoActualizado) {
      throw new NotFoundException(
        `No se pudo actualizar el producto con ID "${id}".`,
      );
    }

    this.logger.log(`Producto actualizado exitosamente: ${id}`);
    return productoActualizado;
  }

  /**
   * Elimina un producto del sistema.
   */
  async eliminarProducto(id: string): Promise<void> {
    this.logger.log(`Eliminando producto con ID: ${id}`);

    // Verificar que existe antes de eliminar
    await this.obtenerProductoPorId(id);

    const eliminado = await this.productoRepositorio.eliminar(id);
    if (!eliminado) {
      throw new NotFoundException(
        `No se pudo eliminar el producto con ID "${id}".`,
      );
    }

    this.logger.log(`Producto eliminado exitosamente: ${id}`);
  }
}

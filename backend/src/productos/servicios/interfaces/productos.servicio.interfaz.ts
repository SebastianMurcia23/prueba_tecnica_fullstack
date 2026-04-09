import { CrearProductoDto } from '../../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../../dtos/consulta-paginacion.dto';
import { ProductoDocumento } from '../../entidades/producto.entidad';
import { ResultadoPaginado } from '../../repositorios/producto.repositorio.interfaz';

/**
 * Interfaz del Servicio de Productos.
 * Define el contrato de la lógica de negocio para la gestión de productos.
 * Las implementaciones concretas residen en la carpeta impl/.
 */
export interface IProductosServicio {
  /**
   * Crea un nuevo producto validando reglas de negocio.
   * - Verifica unicidad del SKU
   * - Valida que el precio sea coherente
   * - Establece estado inicial según cantidad
   */
  crearProducto(crearProductoDto: CrearProductoDto): Promise<ProductoDocumento>;

  /**
   * Obtiene un producto por su ID.
   * @throws NotFoundException si el producto no existe
   */
  obtenerProductoPorId(id: string): Promise<ProductoDocumento>;

  /**
   * Obtiene una lista paginada de productos con filtros opcionales.
   */
  obtenerProductosPaginados(
    consulta: ConsultaPaginacionDto,
  ): Promise<ResultadoPaginado<ProductoDocumento>>;

  /**
   * Actualiza un producto existente con validaciones de negocio.
   * - Verifica que el producto exista
   * - Si se cambia el SKU, verifica unicidad
   * - Actualiza el estado según la cantidad
   */
  actualizarProducto(
    id: string,
    actualizarProductoDto: ActualizarProductoDto,
  ): Promise<ProductoDocumento>;

  /**
   * Elimina un producto por su ID.
   * @throws NotFoundException si el producto no existe
   */
  eliminarProducto(id: string): Promise<void>;
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  HttpStatus,
  HttpCode,
  Logger,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Inject } from '@nestjs/common';
import { JwtAuthGuardia } from '../../autenticacion/guardias/jwt-auth.guardia';
import { IProductosServicio } from '../servicios/interfaces/productos.servicio.interfaz';
import { CrearProductoDto } from '../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../dtos/consulta-paginacion.dto';

/**
 * Controlador de Productos.
 * Expone los endpoints REST para la gestión completa de productos.
 * Todos los endpoints están protegidos con JWT y documentados con Swagger.
 */
@ApiTags('Productos')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuardia)
@Controller('productos')
export class ProductosControlador {
  private readonly logger = new Logger(ProductosControlador.name);

  constructor(
    @Inject('PRODUCTOS_SERVICIO')
    private readonly productosServicio: IProductosServicio,
  ) {}

  /**
   * POST /api/productos - Crear un nuevo producto
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Crear un nuevo producto',
    description: 'Registra un nuevo producto en el sistema. Requiere autenticación JWT.',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto creado exitosamente.',
  })
  @ApiResponse({
    status: 400,
    description: 'Error de validación en los datos enviados.',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe un producto con el mismo SKU.',
  })
  @ApiResponse({
    status: 401,
    description: 'No autorizado. Se requiere token JWT válido.',
  })
  async crearProducto(@Body() crearProductoDto: CrearProductoDto) {
    this.logger.log(`POST /productos - Crear producto: ${crearProductoDto.sku}`);
    const producto = await this.productosServicio.crearProducto(crearProductoDto);
    return {
      exito: true,
      mensaje: 'Producto creado exitosamente.',
      datos: producto,
      codigoEstado: HttpStatus.CREATED,
    };
  }

  /**
   * GET /api/productos - Listar productos con paginación y filtros
   */
  @Get()
  @ApiOperation({
    summary: 'Listar productos paginados',
    description: 'Obtiene una lista paginada de productos con filtros opcionales.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos obtenida exitosamente.',
  })
  async obtenerProductos(@Query() consulta: ConsultaPaginacionDto) {
    this.logger.log(`GET /productos - Página: ${consulta.pagina}, Límite: ${consulta.limite}`);
    const resultado = await this.productosServicio.obtenerProductosPaginados(consulta);
    return {
      exito: true,
      mensaje: 'Productos obtenidos exitosamente.',
      datos: resultado,
      codigoEstado: HttpStatus.OK,
    };
  }

  /**
   * GET /api/productos/:id - Obtener un producto por ID
   */
  @Get(':id')
  @ApiOperation({
    summary: 'Obtener producto por ID',
    description: 'Busca y retorna un producto específico por su identificador único.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identificador único del producto (MongoDB ObjectId)',
    example: '507f1f77bcf86cd799439011',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto encontrado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  async obtenerProductoPorId(@Param('id') id: string) {
    this.logger.log(`GET /productos/${id}`);
    const producto = await this.productosServicio.obtenerProductoPorId(id);
    return {
      exito: true,
      mensaje: 'Producto obtenido exitosamente.',
      datos: producto,
      codigoEstado: HttpStatus.OK,
    };
  }

  /**
   * PUT /api/productos/:id - Actualizar un producto
   */
  @Put(':id')
  @ApiOperation({
    summary: 'Actualizar un producto',
    description: 'Actualiza los datos de un producto existente. Solo se envían los campos a modificar.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identificador único del producto',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto actualizado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  @ApiResponse({
    status: 409,
    description: 'Conflicto: SKU ya existe en otro producto.',
  })
  async actualizarProducto(
    @Param('id') id: string,
    @Body() actualizarProductoDto: ActualizarProductoDto,
  ) {
    this.logger.log(`PUT /productos/${id}`);
    const producto = await this.productosServicio.actualizarProducto(
      id,
      actualizarProductoDto,
    );
    return {
      exito: true,
      mensaje: 'Producto actualizado exitosamente.',
      datos: producto,
      codigoEstado: HttpStatus.OK,
    };
  }

  /**
   * DELETE /api/productos/:id - Eliminar un producto
   */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Eliminar un producto',
    description: 'Elimina permanentemente un producto del sistema.',
  })
  @ApiParam({
    name: 'id',
    description: 'Identificador único del producto a eliminar',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado exitosamente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no encontrado.',
  })
  async eliminarProducto(@Param('id') id: string) {
    this.logger.log(`DELETE /productos/${id}`);
    await this.productosServicio.eliminarProducto(id);
    return {
      exito: true,
      mensaje: 'Producto eliminado exitosamente.',
      datos: null,
      codigoEstado: HttpStatus.OK,
    };
  }
}

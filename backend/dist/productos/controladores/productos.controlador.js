"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ProductosControlador_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosControlador = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const jwt_auth_guardia_1 = require("../../autenticacion/guardias/jwt-auth.guardia");
const crear_producto_dto_1 = require("../dtos/crear-producto.dto");
const actualizar_producto_dto_1 = require("../dtos/actualizar-producto.dto");
const consulta_paginacion_dto_1 = require("../dtos/consulta-paginacion.dto");
let ProductosControlador = ProductosControlador_1 = class ProductosControlador {
    constructor(productosServicio) {
        this.productosServicio = productosServicio;
        this.logger = new common_1.Logger(ProductosControlador_1.name);
    }
    async crearProducto(crearProductoDto) {
        this.logger.log(`POST /productos - Crear producto: ${crearProductoDto.sku}`);
        const producto = await this.productosServicio.crearProducto(crearProductoDto);
        return {
            exito: true,
            mensaje: 'Producto creado exitosamente.',
            datos: producto,
            codigoEstado: common_1.HttpStatus.CREATED,
        };
    }
    async obtenerProductos(consulta) {
        this.logger.log(`GET /productos - Página: ${consulta.pagina}, Límite: ${consulta.limite}`);
        const resultado = await this.productosServicio.obtenerProductosPaginados(consulta);
        return {
            exito: true,
            mensaje: 'Productos obtenidos exitosamente.',
            datos: resultado,
            codigoEstado: common_1.HttpStatus.OK,
        };
    }
    async obtenerProductoPorId(id) {
        this.logger.log(`GET /productos/${id}`);
        const producto = await this.productosServicio.obtenerProductoPorId(id);
        return {
            exito: true,
            mensaje: 'Producto obtenido exitosamente.',
            datos: producto,
            codigoEstado: common_1.HttpStatus.OK,
        };
    }
    async actualizarProducto(id, actualizarProductoDto) {
        this.logger.log(`PUT /productos/${id}`);
        const producto = await this.productosServicio.actualizarProducto(id, actualizarProductoDto);
        return {
            exito: true,
            mensaje: 'Producto actualizado exitosamente.',
            datos: producto,
            codigoEstado: common_1.HttpStatus.OK,
        };
    }
    async eliminarProducto(id) {
        this.logger.log(`DELETE /productos/${id}`);
        await this.productosServicio.eliminarProducto(id);
        return {
            exito: true,
            mensaje: 'Producto eliminado exitosamente.',
            datos: null,
            codigoEstado: common_1.HttpStatus.OK,
        };
    }
};
exports.ProductosControlador = ProductosControlador;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Crear un nuevo producto',
        description: 'Registra un nuevo producto en el sistema. Requiere autenticación JWT.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Producto creado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Error de validación en los datos enviados.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ya existe un producto con el mismo SKU.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'No autorizado. Se requiere token JWT válido.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_producto_dto_1.CrearProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosControlador.prototype, "crearProducto", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar productos paginados',
        description: 'Obtiene una lista paginada de productos con filtros opcionales.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de productos obtenida exitosamente.',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [consulta_paginacion_dto_1.ConsultaPaginacionDto]),
    __metadata("design:returntype", Promise)
], ProductosControlador.prototype, "obtenerProductos", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener producto por ID',
        description: 'Busca y retorna un producto específico por su identificador único.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador único del producto (MongoDB ObjectId)',
        example: '507f1f77bcf86cd799439011',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto encontrado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControlador.prototype, "obtenerProductoPorId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar un producto',
        description: 'Actualiza los datos de un producto existente. Solo se envían los campos a modificar.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador único del producto',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto actualizado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto no encontrado.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Conflicto: SKU ya existe en otro producto.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actualizar_producto_dto_1.ActualizarProductoDto]),
    __metadata("design:returntype", Promise)
], ProductosControlador.prototype, "actualizarProducto", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar un producto',
        description: 'Elimina permanentemente un producto del sistema.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador único del producto a eliminar',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Producto eliminado exitosamente.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Producto no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductosControlador.prototype, "eliminarProducto", null);
exports.ProductosControlador = ProductosControlador = ProductosControlador_1 = __decorate([
    (0, swagger_1.ApiTags)('Productos'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(jwt_auth_guardia_1.JwtAuthGuardia),
    (0, common_1.Controller)('productos'),
    __param(0, (0, common_2.Inject)('PRODUCTOS_SERVICIO')),
    __metadata("design:paramtypes", [Object])
], ProductosControlador);
//# sourceMappingURL=productos.controlador.js.map
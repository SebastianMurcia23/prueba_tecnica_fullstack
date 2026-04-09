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
var ProductosServicioImpl_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosServicioImpl = void 0;
const common_1 = require("@nestjs/common");
const producto_entidad_1 = require("../../entidades/producto.entidad");
let ProductosServicioImpl = ProductosServicioImpl_1 = class ProductosServicioImpl {
    constructor(productoRepositorio) {
        this.productoRepositorio = productoRepositorio;
        this.logger = new common_1.Logger(ProductosServicioImpl_1.name);
    }
    async crearProducto(crearProductoDto) {
        this.logger.log(`Creando producto con SKU: ${crearProductoDto.sku}`);
        const productoExistente = await this.productoRepositorio.buscarPorSku(crearProductoDto.sku);
        if (productoExistente) {
            throw new common_1.ConflictException(`Ya existe un producto con el SKU "${crearProductoDto.sku}". Cada producto debe tener un SKU único.`);
        }
        const datosProducto = { ...crearProductoDto };
        if (datosProducto.cantidad === 0) {
            datosProducto.estado = producto_entidad_1.EstadoProducto.AGOTADO;
            this.logger.warn(`Producto ${datosProducto.sku} creado con cantidad 0, estado establecido a AGOTADO`);
        }
        if (datosProducto.estado === producto_entidad_1.EstadoProducto.ACTIVO && datosProducto.precio <= 0) {
            throw new common_1.BadRequestException('Un producto activo debe tener un precio mayor a 0.');
        }
        const productoCreado = await this.productoRepositorio.crear(datosProducto);
        this.logger.log(`Producto creado exitosamente: ${productoCreado.id}`);
        return productoCreado;
    }
    async obtenerProductoPorId(id) {
        const producto = await this.productoRepositorio.buscarPorId(id);
        if (!producto) {
            throw new common_1.NotFoundException(`No se encontró ningún producto con el ID "${id}".`);
        }
        return producto;
    }
    async obtenerProductosPaginados(consulta) {
        const { pagina = 1, limite = 10, ...filtros } = consulta;
        this.logger.log(`Consultando productos - Página: ${pagina}, Límite: ${limite}`);
        return this.productoRepositorio.buscarTodosPaginado(pagina, limite, filtros);
    }
    async actualizarProducto(id, actualizarProductoDto) {
        this.logger.log(`Actualizando producto con ID: ${id}`);
        const productoActual = await this.obtenerProductoPorId(id);
        if (actualizarProductoDto.sku &&
            actualizarProductoDto.sku !== productoActual.sku) {
            const productoConSku = await this.productoRepositorio.buscarPorSku(actualizarProductoDto.sku);
            if (productoConSku) {
                throw new common_1.ConflictException(`Ya existe otro producto con el SKU "${actualizarProductoDto.sku}".`);
            }
        }
        const datosActualizacion = { ...actualizarProductoDto };
        if (datosActualizacion.cantidad !== undefined) {
            if (datosActualizacion.cantidad === 0) {
                datosActualizacion.estado = producto_entidad_1.EstadoProducto.AGOTADO;
            }
            else if (productoActual.estado === producto_entidad_1.EstadoProducto.AGOTADO &&
                datosActualizacion.cantidad > 0) {
                datosActualizacion.estado = producto_entidad_1.EstadoProducto.ACTIVO;
                this.logger.log(`Producto ${id} reactivado: stock restaurado a ${datosActualizacion.cantidad}`);
            }
        }
        const estadoFinal = datosActualizacion.estado || productoActual.estado;
        const precioFinal = datosActualizacion.precio ?? productoActual.precio;
        if (estadoFinal === producto_entidad_1.EstadoProducto.ACTIVO && precioFinal <= 0) {
            throw new common_1.BadRequestException('Un producto activo debe tener un precio mayor a 0.');
        }
        const productoActualizado = await this.productoRepositorio.actualizar(id, datosActualizacion);
        if (!productoActualizado) {
            throw new common_1.NotFoundException(`No se pudo actualizar el producto con ID "${id}".`);
        }
        this.logger.log(`Producto actualizado exitosamente: ${id}`);
        return productoActualizado;
    }
    async eliminarProducto(id) {
        this.logger.log(`Eliminando producto con ID: ${id}`);
        await this.obtenerProductoPorId(id);
        const eliminado = await this.productoRepositorio.eliminar(id);
        if (!eliminado) {
            throw new common_1.NotFoundException(`No se pudo eliminar el producto con ID "${id}".`);
        }
        this.logger.log(`Producto eliminado exitosamente: ${id}`);
    }
};
exports.ProductosServicioImpl = ProductosServicioImpl;
exports.ProductosServicioImpl = ProductosServicioImpl = ProductosServicioImpl_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRODUCTO_REPOSITORIO')),
    __metadata("design:paramtypes", [Object])
], ProductosServicioImpl);
//# sourceMappingURL=productos.servicio.impl.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRepositorio = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const producto_entidad_1 = require("../entidades/producto.entidad");
let ProductoRepositorio = class ProductoRepositorio {
    constructor(productoModelo) {
        this.productoModelo = productoModelo;
    }
    async crear(datosProducto) {
        const nuevoProducto = new this.productoModelo(datosProducto);
        return nuevoProducto.save();
    }
    async buscarPorId(id) {
        return this.productoModelo.findById(id).exec();
    }
    async buscarPorSku(sku) {
        return this.productoModelo.findOne({ sku: sku.toUpperCase() }).exec();
    }
    async buscarTodosPaginado(pagina, limite, filtros = {}) {
        const consultaFiltros = this.construirFiltros(filtros);
        const salto = (pagina - 1) * limite;
        const [datos, total] = await Promise.all([
            this.productoModelo
                .find(consultaFiltros)
                .sort({ fechaCreacion: -1 })
                .skip(salto)
                .limit(limite)
                .exec(),
            this.productoModelo.countDocuments(consultaFiltros).exec(),
        ]);
        return {
            datos,
            total,
            pagina,
            limite,
            totalPaginas: Math.ceil(total / limite),
        };
    }
    async actualizar(id, datosActualizacion) {
        return this.productoModelo
            .findByIdAndUpdate(id, datosActualizacion, { new: true, runValidators: true })
            .exec();
    }
    async eliminar(id) {
        const resultado = await this.productoModelo.findByIdAndDelete(id).exec();
        return resultado !== null;
    }
    async contar(filtros = {}) {
        const consultaFiltros = this.construirFiltros(filtros);
        return this.productoModelo.countDocuments(consultaFiltros).exec();
    }
    construirFiltros(filtros) {
        const consultaMongo = {};
        if (filtros.categoria) {
            consultaMongo.categoria = filtros.categoria;
        }
        if (filtros.estado) {
            consultaMongo.estado = filtros.estado;
        }
        if (filtros.busqueda) {
            consultaMongo.$or = [
                { nombre: { $regex: filtros.busqueda, $options: 'i' } },
                { descripcion: { $regex: filtros.busqueda, $options: 'i' } },
                { sku: { $regex: filtros.busqueda, $options: 'i' } },
            ];
        }
        if (filtros.precioMinimo !== undefined || filtros.precioMaximo !== undefined) {
            consultaMongo.precio = {};
            if (filtros.precioMinimo !== undefined) {
                consultaMongo.precio.$gte = filtros.precioMinimo;
            }
            if (filtros.precioMaximo !== undefined) {
                consultaMongo.precio.$lte = filtros.precioMaximo;
            }
        }
        return consultaMongo;
    }
};
exports.ProductoRepositorio = ProductoRepositorio;
exports.ProductoRepositorio = ProductoRepositorio = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(producto_entidad_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductoRepositorio);
//# sourceMappingURL=producto.repositorio.js.map
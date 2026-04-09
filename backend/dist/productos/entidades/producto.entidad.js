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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoEsquema = exports.Producto = exports.EstadoProducto = exports.CategoriaProducto = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
var CategoriaProducto;
(function (CategoriaProducto) {
    CategoriaProducto["SEMILLAS"] = "semillas";
    CategoriaProducto["FERTILIZANTES"] = "fertilizantes";
    CategoriaProducto["HERRAMIENTAS"] = "herramientas";
    CategoriaProducto["MAQUINARIA"] = "maquinaria";
    CategoriaProducto["ALIMENTOS_ANIMALES"] = "alimentos_animales";
    CategoriaProducto["PRODUCTOS_VETERINARIOS"] = "productos_veterinarios";
    CategoriaProducto["RIEGO"] = "riego";
    CategoriaProducto["OTROS"] = "otros";
})(CategoriaProducto || (exports.CategoriaProducto = CategoriaProducto = {}));
var EstadoProducto;
(function (EstadoProducto) {
    EstadoProducto["ACTIVO"] = "activo";
    EstadoProducto["INACTIVO"] = "inactivo";
    EstadoProducto["AGOTADO"] = "agotado";
})(EstadoProducto || (exports.EstadoProducto = EstadoProducto = {}));
let Producto = class Producto {
};
exports.Producto = Producto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del producto', example: 'Semilla de Maíz Híbrido' }),
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [150, 'El nombre no puede exceder 150 caracteres'],
        index: true,
    }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción detallada del producto', example: 'Semilla certificada de maíz híbrido para zonas tropicales' }),
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
        maxlength: [1000, 'La descripción no puede exceder 1000 caracteres'],
    }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio unitario del producto en COP', example: 45000 }),
    (0, mongoose_1.Prop)({
        required: true,
        min: [0, 'El precio no puede ser negativo'],
    }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad disponible en inventario', example: 100 }),
    (0, mongoose_1.Prop)({
        required: true,
        min: [0, 'La cantidad no puede ser negativa'],
        default: 0,
    }),
    __metadata("design:type", Number)
], Producto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Categoría del producto', enum: CategoriaProducto, example: CategoriaProducto.SEMILLAS }),
    (0, mongoose_1.Prop)({
        required: true,
        enum: CategoriaProducto,
        default: CategoriaProducto.OTROS,
        index: true,
    }),
    __metadata("design:type", String)
], Producto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código SKU único del producto', example: 'SEM-MAIZ-001' }),
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
        uppercase: true,
        match: [/^[A-Z0-9\-]+$/, 'El SKU solo puede contener letras mayúsculas, números y guiones'],
    }),
    __metadata("design:type", String)
], Producto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado actual del producto', enum: EstadoProducto, example: EstadoProducto.ACTIVO }),
    (0, mongoose_1.Prop)({
        required: true,
        enum: EstadoProducto,
        default: EstadoProducto.ACTIVO,
        index: true,
    }),
    __metadata("design:type", String)
], Producto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen del producto', required: false }),
    (0, mongoose_1.Prop)({ trim: true, default: '' }),
    __metadata("design:type", String)
], Producto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del registro' }),
    __metadata("design:type", Date)
], Producto.prototype, "fechaCreacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización' }),
    __metadata("design:type", Date)
], Producto.prototype, "fechaActualizacion", void 0);
exports.Producto = Producto = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'productos',
        timestamps: {
            createdAt: 'fechaCreacion',
            updatedAt: 'fechaActualizacion',
        },
        versionKey: false,
    })
], Producto);
exports.ProductoEsquema = mongoose_1.SchemaFactory.createForClass(Producto);
exports.ProductoEsquema.index({ categoria: 1, estado: 1 });
exports.ProductoEsquema.index({ nombre: 'text', descripcion: 'text' });
//# sourceMappingURL=producto.entidad.js.map
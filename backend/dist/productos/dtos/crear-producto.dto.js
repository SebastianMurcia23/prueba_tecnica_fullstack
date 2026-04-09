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
exports.CrearProductoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const producto_entidad_1 = require("../entidades/producto.entidad");
class CrearProductoDto {
}
exports.CrearProductoDto = CrearProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto',
        example: 'Semilla de Maíz Híbrido',
        minLength: 3,
        maxLength: 150,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre del producto es obligatorio.' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto.' }),
    (0, class_validator_1.MinLength)(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
    (0, class_validator_1.MaxLength)(150, { message: 'El nombre no puede exceder 150 caracteres.' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción detallada del producto',
        example: 'Semilla certificada de maíz híbrido, ideal para zonas tropicales con alto rendimiento por hectárea.',
        minLength: 10,
        maxLength: 1000,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción del producto es obligatoria.' }),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser una cadena de texto.' }),
    (0, class_validator_1.MinLength)(10, { message: 'La descripción debe tener al menos 10 caracteres.' }),
    (0, class_validator_1.MaxLength)(1000, { message: 'La descripción no puede exceder 1000 caracteres.' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio unitario del producto en COP',
        example: 45000,
        minimum: 0,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El precio del producto es obligatorio.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número válido.' }),
    (0, class_validator_1.Min)(0, { message: 'El precio no puede ser un valor negativo.' }),
    __metadata("design:type", Number)
], CrearProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad disponible en inventario',
        example: 100,
        minimum: 0,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La cantidad es obligatoria.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'La cantidad debe ser un número entero válido.' }),
    (0, class_validator_1.Min)(0, { message: 'La cantidad no puede ser un valor negativo.' }),
    __metadata("design:type", Number)
], CrearProductoDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoría del producto',
        enum: producto_entidad_1.CategoriaProducto,
        example: producto_entidad_1.CategoriaProducto.SEMILLAS,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La categoría del producto es obligatoria.' }),
    (0, class_validator_1.IsEnum)(producto_entidad_1.CategoriaProducto, {
        message: `La categoría debe ser una de las siguientes: ${Object.values(producto_entidad_1.CategoriaProducto).join(', ')}.`,
    }),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código SKU único del producto (solo letras mayúsculas, números y guiones)',
        example: 'SEM-MAIZ-001',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código SKU es obligatorio.' }),
    (0, class_validator_1.IsString)({ message: 'El SKU debe ser una cadena de texto.' }),
    (0, class_validator_1.Matches)(/^[A-Z0-9\-]+$/, {
        message: 'El SKU solo puede contener letras mayúsculas, números y guiones (ej: SEM-MAIZ-001).',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value?.toUpperCase().trim()),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado del producto',
        enum: producto_entidad_1.EstadoProducto,
        default: producto_entidad_1.EstadoProducto.ACTIVO,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(producto_entidad_1.EstadoProducto, {
        message: `El estado debe ser uno de los siguientes: ${Object.values(producto_entidad_1.EstadoProducto).join(', ')}.`,
    }),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL de la imagen del producto',
        example: 'https://ejemplo.com/imagen-maiz.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La URL de la imagen debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "imagenUrl", void 0);
//# sourceMappingURL=crear-producto.dto.js.map
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
exports.ConsultaPaginacionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const producto_entidad_1 = require("../entidades/producto.entidad");
class ConsultaPaginacionDto {
    constructor() {
        this.pagina = 1;
        this.limite = 10;
    }
}
exports.ConsultaPaginacionDto = ConsultaPaginacionDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Número de página (inicia en 1)',
        default: 1,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'La página debe ser un número válido.' }),
    (0, class_validator_1.Min)(1, { message: 'La página debe ser al menos 1.' }),
    __metadata("design:type", Number)
], ConsultaPaginacionDto.prototype, "pagina", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Cantidad de registros por página',
        default: 10,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'El límite debe ser un número válido.' }),
    (0, class_validator_1.Min)(1, { message: 'El límite debe ser al menos 1.' }),
    __metadata("design:type", Number)
], ConsultaPaginacionDto.prototype, "limite", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filtrar por categoría del producto',
        enum: producto_entidad_1.CategoriaProducto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(producto_entidad_1.CategoriaProducto, {
        message: `La categoría debe ser una de: ${Object.values(producto_entidad_1.CategoriaProducto).join(', ')}.`,
    }),
    __metadata("design:type", String)
], ConsultaPaginacionDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filtrar por estado del producto',
        enum: producto_entidad_1.EstadoProducto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(producto_entidad_1.EstadoProducto, {
        message: `El estado debe ser uno de: ${Object.values(producto_entidad_1.EstadoProducto).join(', ')}.`,
    }),
    __metadata("design:type", String)
], ConsultaPaginacionDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Búsqueda por texto en nombre, descripción o SKU',
        example: 'maíz',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El término de búsqueda debe ser texto.' }),
    __metadata("design:type", String)
], ConsultaPaginacionDto.prototype, "busqueda", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Precio mínimo para filtrar',
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio mínimo debe ser un número.' }),
    (0, class_validator_1.Min)(0, { message: 'El precio mínimo no puede ser negativo.' }),
    __metadata("design:type", Number)
], ConsultaPaginacionDto.prototype, "precioMinimo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Precio máximo para filtrar',
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio máximo debe ser un número.' }),
    (0, class_validator_1.Min)(0, { message: 'El precio máximo no puede ser negativo.' }),
    __metadata("design:type", Number)
], ConsultaPaginacionDto.prototype, "precioMaximo", void 0);
//# sourceMappingURL=consulta-paginacion.dto.js.map
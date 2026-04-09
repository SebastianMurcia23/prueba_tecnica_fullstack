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
exports.RespuestaApiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RespuestaApiDto {
}
exports.RespuestaApiDto = RespuestaApiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si la operación fue exitosa', example: true }),
    __metadata("design:type", Boolean)
], RespuestaApiDto.prototype, "exito", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Mensaje descriptivo de la operación', example: 'Producto creado exitosamente' }),
    __metadata("design:type", String)
], RespuestaApiDto.prototype, "mensaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Datos de la respuesta' }),
    __metadata("design:type", Object)
], RespuestaApiDto.prototype, "datos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código de estado HTTP', example: 200 }),
    __metadata("design:type", Number)
], RespuestaApiDto.prototype, "codigoEstado", void 0);
//# sourceMappingURL=respuesta-producto.dto.js.map
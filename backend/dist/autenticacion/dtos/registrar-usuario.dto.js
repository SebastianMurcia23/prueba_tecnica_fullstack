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
exports.RegistrarUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const usuario_entidad_1 = require("../entidades/usuario.entidad");
class RegistrarUsuarioDto {
}
exports.RegistrarUsuarioDto = RegistrarUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        example: 'Juan Carlos Pérez',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio.' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto.' }),
    (0, class_validator_1.MinLength)(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El nombre no puede exceder 100 caracteres.' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico único del usuario',
        example: 'juan.perez@empresa.com',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo electrónico es obligatorio.' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Debe proporcionar un correo electrónico válido.' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.toLowerCase().trim()),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña segura (mínimo 6 caracteres)',
        example: 'MiContrasenaSegura123',
        minLength: 6,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria.' }),
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser una cadena de texto.' }),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
    (0, class_validator_1.MaxLength)(50, { message: 'La contraseña no puede exceder 50 caracteres.' }),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "contrasena", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rol del usuario en el sistema',
        enum: usuario_entidad_1.RolUsuario,
        default: usuario_entidad_1.RolUsuario.USUARIO,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(usuario_entidad_1.RolUsuario, {
        message: `El rol debe ser uno de los siguientes: ${Object.values(usuario_entidad_1.RolUsuario).join(', ')}.`,
    }),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "rol", void 0);
//# sourceMappingURL=registrar-usuario.dto.js.map
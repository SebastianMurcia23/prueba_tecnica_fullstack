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
var AutenticacionControlador_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionControlador = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const iniciar_sesion_dto_1 = require("../dtos/iniciar-sesion.dto");
const registrar_usuario_dto_1 = require("../dtos/registrar-usuario.dto");
let AutenticacionControlador = AutenticacionControlador_1 = class AutenticacionControlador {
    constructor(autenticacionServicio) {
        this.autenticacionServicio = autenticacionServicio;
        this.logger = new common_1.Logger(AutenticacionControlador_1.name);
    }
    async registrar(registrarUsuarioDto) {
        this.logger.log(`POST /autenticacion/registrar - ${registrarUsuarioDto.correoElectronico}`);
        const resultado = await this.autenticacionServicio.registrarUsuario(registrarUsuarioDto);
        return {
            exito: true,
            mensaje: 'Usuario registrado exitosamente.',
            datos: resultado,
            codigoEstado: common_1.HttpStatus.CREATED,
        };
    }
    async iniciarSesion(iniciarSesionDto) {
        this.logger.log(`POST /autenticacion/iniciar-sesion - ${iniciarSesionDto.correoElectronico}`);
        const resultado = await this.autenticacionServicio.iniciarSesion(iniciarSesionDto);
        return {
            exito: true,
            mensaje: 'Inicio de sesión exitoso.',
            datos: resultado,
            codigoEstado: common_1.HttpStatus.OK,
        };
    }
};
exports.AutenticacionControlador = AutenticacionControlador;
__decorate([
    (0, common_1.Post)('registrar'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Registrar un nuevo usuario',
        description: 'Crea una nueva cuenta de usuario y devuelve un token JWT de acceso.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Usuario registrado exitosamente. Retorna token JWT.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Error de validación en los datos enviados.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Ya existe una cuenta con este correo electrónico.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrar_usuario_dto_1.RegistrarUsuarioDto]),
    __metadata("design:returntype", Promise)
], AutenticacionControlador.prototype, "registrar", null);
__decorate([
    (0, common_1.Post)('iniciar-sesion'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Iniciar sesión',
        description: 'Autentica un usuario con correo y contraseña, retorna un token JWT.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Inicio de sesión exitoso. Retorna token JWT.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Credenciales incorrectas.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [iniciar_sesion_dto_1.IniciarSesionDto]),
    __metadata("design:returntype", Promise)
], AutenticacionControlador.prototype, "iniciarSesion", null);
exports.AutenticacionControlador = AutenticacionControlador = AutenticacionControlador_1 = __decorate([
    (0, swagger_1.ApiTags)('Autenticación'),
    (0, common_1.Controller)('autenticacion'),
    __param(0, (0, common_2.Inject)('AUTENTICACION_SERVICIO')),
    __metadata("design:paramtypes", [Object])
], AutenticacionControlador);
//# sourceMappingURL=autenticacion.controlador.js.map
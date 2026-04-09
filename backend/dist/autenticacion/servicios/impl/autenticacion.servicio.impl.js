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
var AutenticacionServicioImpl_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionServicioImpl = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AutenticacionServicioImpl = AutenticacionServicioImpl_1 = class AutenticacionServicioImpl {
    constructor(usuarioRepositorio, jwtServicio) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.jwtServicio = jwtServicio;
        this.logger = new common_1.Logger(AutenticacionServicioImpl_1.name);
    }
    async registrarUsuario(registrarUsuarioDto) {
        this.logger.log(`Registrando usuario: ${registrarUsuarioDto.correoElectronico}`);
        const usuarioExistente = await this.usuarioRepositorio.buscarPorCorreo(registrarUsuarioDto.correoElectronico);
        if (usuarioExistente) {
            throw new common_1.ConflictException('Ya existe una cuenta registrada con este correo electrónico.');
        }
        const nuevoUsuario = await this.usuarioRepositorio.crear({
            nombre: registrarUsuarioDto.nombre,
            correoElectronico: registrarUsuarioDto.correoElectronico,
            contrasena: registrarUsuarioDto.contrasena,
            rol: registrarUsuarioDto.rol,
        });
        const payload = {
            sub: nuevoUsuario.id,
            correoElectronico: nuevoUsuario.correoElectronico,
            rol: nuevoUsuario.rol,
        };
        this.logger.log(`Usuario registrado exitosamente: ${nuevoUsuario.id}`);
        return {
            tokenAcceso: this.jwtServicio.sign(payload),
            usuario: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                correoElectronico: nuevoUsuario.correoElectronico,
                rol: nuevoUsuario.rol,
            },
        };
    }
    async iniciarSesion(iniciarSesionDto) {
        this.logger.log(`Intento de inicio de sesión: ${iniciarSesionDto.correoElectronico}`);
        const usuario = await this.usuarioRepositorio.buscarPorCorreo(iniciarSesionDto.correoElectronico);
        if (!usuario) {
            this.logger.warn(`Inicio de sesión fallido: usuario no encontrado - ${iniciarSesionDto.correoElectronico}`);
            throw new common_1.UnauthorizedException('Las credenciales proporcionadas son incorrectas. Verifique su correo y contraseña.');
        }
        const contrasenaValida = await bcrypt.compare(iniciarSesionDto.contrasena, usuario.contrasena);
        if (!contrasenaValida) {
            this.logger.warn(`Inicio de sesión fallido: contraseña incorrecta - ${iniciarSesionDto.correoElectronico}`);
            throw new common_1.UnauthorizedException('Las credenciales proporcionadas son incorrectas. Verifique su correo y contraseña.');
        }
        const payload = {
            sub: usuario.id,
            correoElectronico: usuario.correoElectronico,
            rol: usuario.rol,
        };
        this.logger.log(`Inicio de sesión exitoso: ${usuario.id}`);
        return {
            tokenAcceso: this.jwtServicio.sign(payload),
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                correoElectronico: usuario.correoElectronico,
                rol: usuario.rol,
            },
        };
    }
    async validarUsuarioPorJwt(payload) {
        const usuario = await this.usuarioRepositorio.buscarPorId(payload.sub);
        if (!usuario) {
            throw new common_1.UnauthorizedException('Token inválido o usuario no encontrado.');
        }
        return {
            id: usuario.id,
            correoElectronico: usuario.correoElectronico,
            nombre: usuario.nombre,
            rol: usuario.rol,
        };
    }
};
exports.AutenticacionServicioImpl = AutenticacionServicioImpl;
exports.AutenticacionServicioImpl = AutenticacionServicioImpl = AutenticacionServicioImpl_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_REPOSITORIO')),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AutenticacionServicioImpl);
//# sourceMappingURL=autenticacion.servicio.impl.js.map
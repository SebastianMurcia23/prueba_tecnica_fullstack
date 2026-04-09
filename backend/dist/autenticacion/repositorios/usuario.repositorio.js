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
exports.UsuarioRepositorio = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usuario_entidad_1 = require("../entidades/usuario.entidad");
let UsuarioRepositorio = class UsuarioRepositorio {
    constructor(usuarioModelo) {
        this.usuarioModelo = usuarioModelo;
    }
    async crear(datosUsuario) {
        const nuevoUsuario = new this.usuarioModelo(datosUsuario);
        return nuevoUsuario.save();
    }
    async buscarPorCorreo(correo) {
        return this.usuarioModelo
            .findOne({ correoElectronico: correo.toLowerCase() })
            .exec();
    }
    async buscarPorId(id) {
        return this.usuarioModelo
            .findById(id)
            .select('-contrasena')
            .exec();
    }
};
exports.UsuarioRepositorio = UsuarioRepositorio;
exports.UsuarioRepositorio = UsuarioRepositorio = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuario_entidad_1.Usuario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsuarioRepositorio);
//# sourceMappingURL=usuario.repositorio.js.map
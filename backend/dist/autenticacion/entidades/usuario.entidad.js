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
exports.UsuarioEsquema = exports.Usuario = exports.RolUsuario = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
var RolUsuario;
(function (RolUsuario) {
    RolUsuario["ADMINISTRADOR"] = "administrador";
    RolUsuario["USUARIO"] = "usuario";
})(RolUsuario || (exports.RolUsuario = RolUsuario = {}));
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true,
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
    }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'El correo electrónico no tiene un formato válido'],
        index: true,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "correoElectronico", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: RolUsuario,
        default: RolUsuario.USUARIO,
    }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
exports.Usuario = Usuario = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'usuarios',
        timestamps: {
            createdAt: 'fechaCreacion',
            updatedAt: 'fechaActualizacion',
        },
        versionKey: false,
    })
], Usuario);
exports.UsuarioEsquema = mongoose_1.SchemaFactory.createForClass(Usuario);
exports.UsuarioEsquema.pre('save', async function (next) {
    if (!this.isModified('contrasena')) {
        return next();
    }
    try {
        const sal = await bcrypt.genSalt(12);
        this.contrasena = await bcrypt.hash(this.contrasena, sal);
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.UsuarioEsquema.methods.compararContrasena = async function (contrasenaPlana) {
    return bcrypt.compare(contrasenaPlana, this.contrasena);
};
//# sourceMappingURL=usuario.entidad.js.map
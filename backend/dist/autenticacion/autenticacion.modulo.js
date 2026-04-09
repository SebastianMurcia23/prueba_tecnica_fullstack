"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionModulo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const usuario_entidad_1 = require("./entidades/usuario.entidad");
const usuario_repositorio_1 = require("./repositorios/usuario.repositorio");
const autenticacion_servicio_impl_1 = require("./servicios/impl/autenticacion.servicio.impl");
const autenticacion_controlador_1 = require("./controladores/autenticacion.controlador");
const jwt_estrategia_1 = require("./estrategias/jwt.estrategia");
const jwt_auth_guardia_1 = require("./guardias/jwt-auth.guardia");
let AutenticacionModulo = class AutenticacionModulo {
};
exports.AutenticacionModulo = AutenticacionModulo;
exports.AutenticacionModulo = AutenticacionModulo = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: usuario_entidad_1.Usuario.name, schema: usuario_entidad_1.UsuarioEsquema },
            ]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configServicio) => ({
                    secret: configServicio.get('JWT_SECRETO'),
                    signOptions: {
                        expiresIn: configServicio.get('JWT_EXPIRACION', '24h'),
                    },
                }),
            }),
        ],
        controllers: [autenticacion_controlador_1.AutenticacionControlador],
        providers: [
            {
                provide: 'USUARIO_REPOSITORIO',
                useClass: usuario_repositorio_1.UsuarioRepositorio,
            },
            {
                provide: 'AUTENTICACION_SERVICIO',
                useClass: autenticacion_servicio_impl_1.AutenticacionServicioImpl,
            },
            jwt_estrategia_1.JwtEstrategia,
            jwt_auth_guardia_1.JwtAuthGuardia,
        ],
        exports: ['AUTENTICACION_SERVICIO', jwt_auth_guardia_1.JwtAuthGuardia, jwt_estrategia_1.JwtEstrategia],
    })
], AutenticacionModulo);
//# sourceMappingURL=autenticacion.modulo.js.map
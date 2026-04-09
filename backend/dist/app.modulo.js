"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModulo = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const productos_modulo_1 = require("./productos/productos.modulo");
const autenticacion_modulo_1 = require("./autenticacion/autenticacion.modulo");
const excepcion_http_filtro_1 = require("./comun/filtros/excepcion-http.filtro");
const registro_interceptor_1 = require("./comun/interceptores/registro.interceptor");
let AppModulo = class AppModulo {
};
exports.AppModulo = AppModulo;
exports.AppModulo = AppModulo = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configServicio) => ({
                    uri: configServicio.get('MONGODB_URI'),
                }),
            }),
            productos_modulo_1.ProductosModulo,
            autenticacion_modulo_1.AutenticacionModulo,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: excepcion_http_filtro_1.FiltroExcepcionesHttp,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: registro_interceptor_1.RegistroInterceptor,
            },
        ],
    })
], AppModulo);
//# sourceMappingURL=app.modulo.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FiltroExcepcionesHttp_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroExcepcionesHttp = void 0;
const common_1 = require("@nestjs/common");
let FiltroExcepcionesHttp = FiltroExcepcionesHttp_1 = class FiltroExcepcionesHttp {
    constructor() {
        this.logger = new common_1.Logger(FiltroExcepcionesHttp_1.name);
    }
    catch(excepcion, host) {
        const contexto = host.switchToHttp();
        const respuesta = contexto.getResponse();
        const solicitud = contexto.getRequest();
        let codigoEstado = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let mensaje = 'Ha ocurrido un error interno en el servidor.';
        let errores = null;
        if (excepcion instanceof common_1.HttpException) {
            codigoEstado = excepcion.getStatus();
            const respuestaExcepcion = excepcion.getResponse();
            if (typeof respuestaExcepcion === 'string') {
                mensaje = respuestaExcepcion;
            }
            else if (typeof respuestaExcepcion === 'object') {
                const obj = respuestaExcepcion;
                mensaje = obj.message || excepcion.message;
                if (Array.isArray(obj.message)) {
                    mensaje = 'Error de validación en los datos enviados.';
                    errores = obj.message;
                }
            }
        }
        else if (excepcion?.code === 11000) {
            codigoEstado = common_1.HttpStatus.CONFLICT;
            const clavesDuplicadas = excepcion.keyValue;
            const campos = Object.keys(clavesDuplicadas || {}).join(', ');
            mensaje = `Ya existe un registro con el mismo valor en: ${campos}.`;
        }
        else if (excepcion?.name === 'ValidationError') {
            codigoEstado = common_1.HttpStatus.BAD_REQUEST;
            const erroresMongoose = excepcion.errors || {};
            const mensajesError = Object.values(erroresMongoose).map((e) => e.message);
            mensaje = 'Error de validación en los datos.';
            errores = mensajesError;
        }
        else if (excepcion?.name === 'CastError') {
            codigoEstado = common_1.HttpStatus.BAD_REQUEST;
            mensaje = 'El identificador proporcionado no tiene un formato válido.';
        }
        else if (excepcion instanceof Error) {
            mensaje = excepcion.message || mensaje;
        }
        this.logger.error(`[${solicitud.method}] ${solicitud.url} - ${codigoEstado}: ${mensaje}`, excepcion instanceof Error ? excepcion.stack : '');
        respuesta.status(codigoEstado).json({
            exito: false,
            mensaje,
            errores,
            codigoEstado,
            timestamp: new Date().toISOString(),
            ruta: solicitud.url,
        });
    }
};
exports.FiltroExcepcionesHttp = FiltroExcepcionesHttp;
exports.FiltroExcepcionesHttp = FiltroExcepcionesHttp = FiltroExcepcionesHttp_1 = __decorate([
    (0, common_1.Catch)()
], FiltroExcepcionesHttp);
//# sourceMappingURL=excepcion-http.filtro.js.map
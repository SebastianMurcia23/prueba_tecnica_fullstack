"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let RegistroInterceptor = class RegistroInterceptor {
    constructor() {
        this.logger = new common_1.Logger('HTTP');
    }
    intercept(contexto, siguiente) {
        const solicitud = contexto.switchToHttp().getRequest();
        const { method, url, ip } = solicitud;
        const agenteUsuario = solicitud.get('user-agent') || '';
        const tiempoInicio = Date.now();
        this.logger.log(`➡️  [${method}] ${url} - IP: ${ip} - Agent: ${agenteUsuario.substring(0, 50)}`);
        return siguiente.handle().pipe((0, rxjs_1.tap)({
            next: () => {
                const respuesta = contexto.switchToHttp().getResponse();
                const tiempoRespuesta = Date.now() - tiempoInicio;
                this.logger.log(`⬅️  [${method}] ${url} - ${respuesta.statusCode} - ${tiempoRespuesta}ms`);
            },
            error: (error) => {
                const tiempoRespuesta = Date.now() - tiempoInicio;
                this.logger.error(`❌ [${method}] ${url} - ${error.status || 500} - ${tiempoRespuesta}ms - ${error.message}`);
            },
        }));
    }
};
exports.RegistroInterceptor = RegistroInterceptor;
exports.RegistroInterceptor = RegistroInterceptor = __decorate([
    (0, common_1.Injectable)()
], RegistroInterceptor);
//# sourceMappingURL=registro.interceptor.js.map
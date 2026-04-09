"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosModulo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const producto_entidad_1 = require("./entidades/producto.entidad");
const producto_repositorio_1 = require("./repositorios/producto.repositorio");
const productos_servicio_impl_1 = require("./servicios/impl/productos.servicio.impl");
const productos_controlador_1 = require("./controladores/productos.controlador");
let ProductosModulo = class ProductosModulo {
};
exports.ProductosModulo = ProductosModulo;
exports.ProductosModulo = ProductosModulo = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: producto_entidad_1.Producto.name, schema: producto_entidad_1.ProductoEsquema },
            ]),
        ],
        controllers: [productos_controlador_1.ProductosControlador],
        providers: [
            {
                provide: 'PRODUCTO_REPOSITORIO',
                useClass: producto_repositorio_1.ProductoRepositorio,
            },
            {
                provide: 'PRODUCTOS_SERVICIO',
                useClass: productos_servicio_impl_1.ProductosServicioImpl,
            },
        ],
        exports: ['PRODUCTOS_SERVICIO'],
    })
], ProductosModulo);
//# sourceMappingURL=productos.modulo.js.map
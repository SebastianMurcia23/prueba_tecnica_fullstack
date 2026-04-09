"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarProductoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const crear_producto_dto_1 = require("./crear-producto.dto");
class ActualizarProductoDto extends (0, swagger_1.PartialType)(crear_producto_dto_1.CrearProductoDto) {
}
exports.ActualizarProductoDto = ActualizarProductoDto;
//# sourceMappingURL=actualizar-producto.dto.js.map
import { PartialType } from '@nestjs/swagger';
import { CrearProductoDto } from './crear-producto.dto';

/**
 * DTO para la actualización parcial de un producto.
 * Extiende CrearProductoDto haciendo todos los campos opcionales.
 * Hereda todas las validaciones y mensajes en español.
 */
export class ActualizarProductoDto extends PartialType(CrearProductoDto) {}

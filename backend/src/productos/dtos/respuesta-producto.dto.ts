import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO de respuesta estandarizada para la API.
 * Todas las respuestas siguen este formato uniforme.
 */
export class RespuestaApiDto<T> {
  @ApiProperty({ description: 'Indica si la operación fue exitosa', example: true })
  exito: boolean;

  @ApiProperty({ description: 'Mensaje descriptivo de la operación', example: 'Producto creado exitosamente' })
  mensaje: string;

  @ApiProperty({ description: 'Datos de la respuesta' })
  datos?: T;

  @ApiProperty({ description: 'Código de estado HTTP', example: 200 })
  codigoEstado: number;
}

import { IsOptional, IsNumber, IsString, IsEnum, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CategoriaProducto, EstadoProducto } from '../entidades/producto.entidad';

/**
 * DTO para consultas paginadas de productos.
 * Soporta filtros opcionales por categoría, estado, búsqueda y rango de precio.
 */
export class ConsultaPaginacionDto {
  @ApiPropertyOptional({
    description: 'Número de página (inicia en 1)',
    default: 1,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'La página debe ser un número válido.' })
  @Min(1, { message: 'La página debe ser al menos 1.' })
  pagina?: number = 1;

  @ApiPropertyOptional({
    description: 'Cantidad de registros por página',
    default: 10,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'El límite debe ser un número válido.' })
  @Min(1, { message: 'El límite debe ser al menos 1.' })
  limite?: number = 10;

  @ApiPropertyOptional({
    description: 'Filtrar por categoría del producto',
    enum: CategoriaProducto,
  })
  @IsOptional()
  @IsEnum(CategoriaProducto, {
    message: `La categoría debe ser una de: ${Object.values(CategoriaProducto).join(', ')}.`,
  })
  categoria?: CategoriaProducto;

  @ApiPropertyOptional({
    description: 'Filtrar por estado del producto',
    enum: EstadoProducto,
  })
  @IsOptional()
  @IsEnum(EstadoProducto, {
    message: `El estado debe ser uno de: ${Object.values(EstadoProducto).join(', ')}.`,
  })
  estado?: EstadoProducto;

  @ApiPropertyOptional({
    description: 'Búsqueda por texto en nombre, descripción o SKU',
    example: 'maíz',
  })
  @IsOptional()
  @IsString({ message: 'El término de búsqueda debe ser texto.' })
  busqueda?: string;

  @ApiPropertyOptional({
    description: 'Precio mínimo para filtrar',
    minimum: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'El precio mínimo debe ser un número.' })
  @Min(0, { message: 'El precio mínimo no puede ser negativo.' })
  precioMinimo?: number;

  @ApiPropertyOptional({
    description: 'Precio máximo para filtrar',
    minimum: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'El precio máximo debe ser un número.' })
  @Min(0, { message: 'El precio máximo no puede ser negativo.' })
  precioMaximo?: number;
}

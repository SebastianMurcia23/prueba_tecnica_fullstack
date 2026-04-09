import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  Min,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { CategoriaProducto, EstadoProducto } from '../entidades/producto.entidad';

/**
 * DTO para la creación de un nuevo producto.
 * Todas las validaciones incluyen mensajes en español.
 */
export class CrearProductoDto {
  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Semilla de Maíz Híbrido',
    minLength: 3,
    maxLength: 150,
  })
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  @MaxLength(150, { message: 'El nombre no puede exceder 150 caracteres.' })
  @Transform(({ value }) => value?.trim())
  nombre: string;

  @ApiProperty({
    description: 'Descripción detallada del producto',
    example: 'Semilla certificada de maíz híbrido, ideal para zonas tropicales con alto rendimiento por hectárea.',
    minLength: 10,
    maxLength: 1000,
  })
  @IsNotEmpty({ message: 'La descripción del producto es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @MinLength(10, { message: 'La descripción debe tener al menos 10 caracteres.' })
  @MaxLength(1000, { message: 'La descripción no puede exceder 1000 caracteres.' })
  @Transform(({ value }) => value?.trim())
  descripcion: string;

  @ApiProperty({
    description: 'Precio unitario del producto en COP',
    example: 45000,
    minimum: 0,
  })
  @IsNotEmpty({ message: 'El precio del producto es obligatorio.' })
  @IsNumber({}, { message: 'El precio debe ser un número válido.' })
  @Min(0, { message: 'El precio no puede ser un valor negativo.' })
  precio: number;

  @ApiProperty({
    description: 'Cantidad disponible en inventario',
    example: 100,
    minimum: 0,
  })
  @IsNotEmpty({ message: 'La cantidad es obligatoria.' })
  @IsNumber({}, { message: 'La cantidad debe ser un número entero válido.' })
  @Min(0, { message: 'La cantidad no puede ser un valor negativo.' })
  cantidad: number;

  @ApiProperty({
    description: 'Categoría del producto',
    enum: CategoriaProducto,
    example: CategoriaProducto.SEMILLAS,
  })
  @IsNotEmpty({ message: 'La categoría del producto es obligatoria.' })
  @IsEnum(CategoriaProducto, {
    message: `La categoría debe ser una de las siguientes: ${Object.values(CategoriaProducto).join(', ')}.`,
  })
  categoria: CategoriaProducto;

  @ApiProperty({
    description: 'Código SKU único del producto (solo letras mayúsculas, números y guiones)',
    example: 'SEM-MAIZ-001',
  })
  @IsNotEmpty({ message: 'El código SKU es obligatorio.' })
  @IsString({ message: 'El SKU debe ser una cadena de texto.' })
  @Matches(/^[A-Z0-9\-]+$/, {
    message: 'El SKU solo puede contener letras mayúsculas, números y guiones (ej: SEM-MAIZ-001).',
  })
  @Transform(({ value }) => value?.toUpperCase().trim())
  sku: string;

  @ApiPropertyOptional({
    description: 'Estado del producto',
    enum: EstadoProducto,
    default: EstadoProducto.ACTIVO,
  })
  @IsOptional()
  @IsEnum(EstadoProducto, {
    message: `El estado debe ser uno de los siguientes: ${Object.values(EstadoProducto).join(', ')}.`,
  })
  estado?: EstadoProducto;

  @ApiPropertyOptional({
    description: 'URL de la imagen del producto',
    example: 'https://ejemplo.com/imagen-maiz.jpg',
  })
  @IsOptional()
  @IsString({ message: 'La URL de la imagen debe ser una cadena de texto.' })
  imagenUrl?: string;
}

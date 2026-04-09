import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Enumeración de categorías de productos disponibles.
 * Contexto agropecuario según el dominio del negocio.
 */
export enum CategoriaProducto {
  SEMILLAS = 'semillas',
  FERTILIZANTES = 'fertilizantes',
  HERRAMIENTAS = 'herramientas',
  MAQUINARIA = 'maquinaria',
  ALIMENTOS_ANIMALES = 'alimentos_animales',
  PRODUCTOS_VETERINARIOS = 'productos_veterinarios',
  RIEGO = 'riego',
  OTROS = 'otros',
}

/**
 * Enumeración de estados posibles de un producto.
 */
export enum EstadoProducto {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  AGOTADO = 'agotado',
}

/**
 * Tipo de documento Mongoose para Producto.
 */
export type ProductoDocumento = Producto & Document;

/**
 * Entidad Producto - Esquema principal para la colección de productos.
 * Incluye validaciones a nivel de esquema y generación automática de timestamps.
 */
@Schema({
  collection: 'productos',
  timestamps: {
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaActualizacion',
  },
  versionKey: false,
})
export class Producto {
  @ApiProperty({ description: 'Nombre del producto', example: 'Semilla de Maíz Híbrido' })
  @Prop({
    required: true,
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    maxlength: [150, 'El nombre no puede exceder 150 caracteres'],
    index: true,
  })
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada del producto', example: 'Semilla certificada de maíz híbrido para zonas tropicales' })
  @Prop({
    required: true,
    trim: true,
    minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
    maxlength: [1000, 'La descripción no puede exceder 1000 caracteres'],
  })
  descripcion: string;

  @ApiProperty({ description: 'Precio unitario del producto en COP', example: 45000 })
  @Prop({
    required: true,
    min: [0, 'El precio no puede ser negativo'],
  })
  precio: number;

  @ApiProperty({ description: 'Cantidad disponible en inventario', example: 100 })
  @Prop({
    required: true,
    min: [0, 'La cantidad no puede ser negativa'],
    default: 0,
  })
  cantidad: number;

  @ApiProperty({ description: 'Categoría del producto', enum: CategoriaProducto, example: CategoriaProducto.SEMILLAS })
  @Prop({
    required: true,
    enum: CategoriaProducto,
    default: CategoriaProducto.OTROS,
    index: true,
  })
  categoria: CategoriaProducto;

  @ApiProperty({ description: 'Código SKU único del producto', example: 'SEM-MAIZ-001' })
  @Prop({
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
    match: [/^[A-Z0-9\-]+$/, 'El SKU solo puede contener letras mayúsculas, números y guiones'],
  })
  sku: string;

  @ApiProperty({ description: 'Estado actual del producto', enum: EstadoProducto, example: EstadoProducto.ACTIVO })
  @Prop({
    required: true,
    enum: EstadoProducto,
    default: EstadoProducto.ACTIVO,
    index: true,
  })
  estado: EstadoProducto;

  @ApiProperty({ description: 'URL de la imagen del producto', required: false })
  @Prop({ trim: true, default: '' })
  imagenUrl: string;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  fechaCreacion?: Date;

  @ApiProperty({ description: 'Fecha de última actualización' })
  fechaActualizacion?: Date;
}

export const ProductoEsquema = SchemaFactory.createForClass(Producto);

/** Índice compuesto para búsquedas frecuentes por categoría y estado */
ProductoEsquema.index({ categoria: 1, estado: 1 });

/** Índice de texto para búsqueda por nombre y descripción */
ProductoEsquema.index({ nombre: 'text', descripcion: 'text' });

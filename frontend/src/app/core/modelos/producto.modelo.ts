/**
 * Modelo de Producto en el frontend.
 * Espejo de la entidad del backend.
 */
export interface Producto {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  categoria: CategoriaProducto;
  sku: string;
  estado: EstadoProducto;
  imagenUrl?: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
}

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

export enum EstadoProducto {
  ACTIVO = 'activo',
  INACTIVO = 'inactivo',
  AGOTADO = 'agotado',
}

/** Mapa de etiquetas amigables para las categorías */
export const ETIQUETAS_CATEGORIA: Record<CategoriaProducto, string> = {
  [CategoriaProducto.SEMILLAS]: 'Semillas',
  [CategoriaProducto.FERTILIZANTES]: 'Fertilizantes',
  [CategoriaProducto.HERRAMIENTAS]: 'Herramientas',
  [CategoriaProducto.MAQUINARIA]: 'Maquinaria',
  [CategoriaProducto.ALIMENTOS_ANIMALES]: 'Alimentos para Animales',
  [CategoriaProducto.PRODUCTOS_VETERINARIOS]: 'Productos Veterinarios',
  [CategoriaProducto.RIEGO]: 'Riego',
  [CategoriaProducto.OTROS]: 'Otros',
};

/** Mapa de etiquetas amigables para los estados */
export const ETIQUETAS_ESTADO: Record<EstadoProducto, string> = {
  [EstadoProducto.ACTIVO]: 'Activo',
  [EstadoProducto.INACTIVO]: 'Inactivo',
  [EstadoProducto.AGOTADO]: 'Agotado',
};

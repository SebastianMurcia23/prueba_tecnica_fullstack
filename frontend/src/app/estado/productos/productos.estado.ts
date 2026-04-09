import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Producto } from '../../core/modelos/producto.modelo';

/**
 * Estado del dominio de Productos.
 * Utiliza @ngrx/entity para gestión eficiente de colecciones.
 */
export interface EstadoProductos extends EntityState<Producto> {
  cargando: boolean;
  error: string | null;
  mensajeExito: string | null;
  productoSeleccionadoId: string | null;
  total: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
}

/**
 * Adaptador de entidad para Producto.
 * Usa _id como identificador (MongoDB).
 */
export const adaptadorProductos: EntityAdapter<Producto> = createEntityAdapter<Producto>({
  selectId: (producto: Producto) => producto._id,
  sortComparer: (a, b) => {
    const fechaA = a.fechaCreacion ? new Date(a.fechaCreacion).getTime() : 0;
    const fechaB = b.fechaCreacion ? new Date(b.fechaCreacion).getTime() : 0;
    return fechaB - fechaA;
  },
});

/**
 * Estado inicial del store de productos.
 */
export const estadoInicialProductos: EstadoProductos = adaptadorProductos.getInitialState({
  cargando: false,
  error: null,
  mensajeExito: null,
  productoSeleccionadoId: null,
  total: 0,
  pagina: 1,
  limite: 10,
  totalPaginas: 0,
});

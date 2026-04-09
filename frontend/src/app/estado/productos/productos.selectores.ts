import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EstadoProductos, adaptadorProductos } from './productos.estado';

/**
 * Selectores NgRx para el dominio de Productos.
 * Funciones memoizadas para extraer datos del estado de forma eficiente.
 */

/** Selector raíz del estado de productos */
export const seleccionarEstadoProductos = createFeatureSelector<EstadoProductos>('productos');

/** Selectores generados por el adaptador de entidad */
const { selectAll, selectEntities, selectIds, selectTotal } = adaptadorProductos.getSelectors();

/** Todos los productos como array */
export const seleccionarTodosProductos = createSelector(
  seleccionarEstadoProductos,
  selectAll,
);

/** Mapa de entidades de productos */
export const seleccionarEntidadesProductos = createSelector(
  seleccionarEstadoProductos,
  selectEntities,
);

/** IDs de los productos */
export const seleccionarIdsProductos = createSelector(
  seleccionarEstadoProductos,
  selectIds,
);

/** Estado de carga */
export const seleccionarCargando = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.cargando,
);

/** Error actual */
export const seleccionarError = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.error,
);

/** Mensaje de éxito */
export const seleccionarMensajeExito = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.mensajeExito,
);

/** Total de productos */
export const seleccionarTotal = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.total,
);

/** Página actual */
export const seleccionarPagina = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.pagina,
);

/** Límite por página */
export const seleccionarLimite = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.limite,
);

/** Total de páginas */
export const seleccionarTotalPaginas = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.totalPaginas,
);

/** ID del producto seleccionado */
export const seleccionarProductoSeleccionadoId = createSelector(
  seleccionarEstadoProductos,
  (estado) => estado.productoSeleccionadoId,
);

/** Producto seleccionado (objeto completo) */
export const seleccionarProductoSeleccionado = createSelector(
  seleccionarEntidadesProductos,
  seleccionarProductoSeleccionadoId,
  (entidades, id) => (id ? entidades[id] || null : null),
);

/** Información de paginación agrupada */
export const seleccionarInfoPaginacion = createSelector(
  seleccionarEstadoProductos,
  (estado) => ({
    pagina: estado.pagina,
    limite: estado.limite,
    total: estado.total,
    totalPaginas: estado.totalPaginas,
  }),
);

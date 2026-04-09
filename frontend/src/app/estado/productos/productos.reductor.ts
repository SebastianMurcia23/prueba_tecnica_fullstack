import { createReducer, on } from '@ngrx/store';
import { ProductosAcciones } from './productos.acciones';
import {
  EstadoProductos,
  estadoInicialProductos,
  adaptadorProductos,
} from './productos.estado';

/**
 * Reductor de Productos.
 * Funciones puras que transforman el estado en respuesta a las acciones.
 */
export const productosReductor = createReducer(
  estadoInicialProductos,

  // ---- Cargar Productos ----
  on(ProductosAcciones.cargarProductos, (estado) => ({
    ...estado,
    cargando: true,
    error: null,
  })),

  on(ProductosAcciones.cargarProductosExito, (estado, { resultado }) =>
    adaptadorProductos.setAll(resultado.datos, {
      ...estado,
      cargando: false,
      error: null,
      total: resultado.total,
      pagina: resultado.pagina,
      limite: resultado.limite,
      totalPaginas: resultado.totalPaginas,
    }),
  ),

  on(ProductosAcciones.cargarProductosError, (estado, { error }) => ({
    ...estado,
    cargando: false,
    error,
  })),

  // ---- Crear Producto ----
  on(ProductosAcciones.crearProducto, (estado) => ({
    ...estado,
    cargando: true,
    error: null,
    mensajeExito: null,
  })),

  on(ProductosAcciones.crearProductoExito, (estado, { producto }) =>
    adaptadorProductos.addOne(producto, {
      ...estado,
      cargando: false,
      mensajeExito: `Producto "${producto.nombre}" creado exitosamente.`,
      total: estado.total + 1,
    }),
  ),

  on(ProductosAcciones.crearProductoError, (estado, { error }) => ({
    ...estado,
    cargando: false,
    error,
  })),

  // ---- Actualizar Producto ----
  on(ProductosAcciones.actualizarProducto, (estado) => ({
    ...estado,
    cargando: true,
    error: null,
    mensajeExito: null,
  })),

  on(ProductosAcciones.actualizarProductoExito, (estado, { producto }) =>
    adaptadorProductos.updateOne(
      { id: producto._id, changes: producto },
      {
        ...estado,
        cargando: false,
        mensajeExito: `Producto "${producto.nombre}" actualizado exitosamente.`,
      },
    ),
  ),

  on(ProductosAcciones.actualizarProductoError, (estado, { error }) => ({
    ...estado,
    cargando: false,
    error,
  })),

  // ---- Eliminar Producto ----
  on(ProductosAcciones.eliminarProducto, (estado) => ({
    ...estado,
    cargando: true,
    error: null,
    mensajeExito: null,
  })),

  on(ProductosAcciones.eliminarProductoExito, (estado, { id }) =>
    adaptadorProductos.removeOne(id, {
      ...estado,
      cargando: false,
      mensajeExito: 'Producto eliminado exitosamente.',
      total: estado.total - 1,
    }),
  ),

  on(ProductosAcciones.eliminarProductoError, (estado, { error }) => ({
    ...estado,
    cargando: false,
    error,
  })),

  // ---- Seleccionar Producto ----
  on(ProductosAcciones.seleccionarProducto, (estado, { id }) => ({
    ...estado,
    productoSeleccionadoId: id,
  })),

  // ---- Limpiar Mensaje ----
  on(ProductosAcciones.limpiarMensaje, (estado) => ({
    ...estado,
    error: null,
    mensajeExito: null,
  })),
);

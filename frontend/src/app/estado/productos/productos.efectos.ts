import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductosAcciones } from './productos.acciones';
import { ProductosServicio } from '../../servicios/productos.servicio';

/**
 * Efectos NgRx para Productos.
 * Manejan los side effects (llamadas HTTP) de forma reactiva.
 */
@Injectable()
export class ProductosEfectos {
  constructor(
    private readonly acciones$: Actions,
    private readonly productosServicio: ProductosServicio,
  ) {}

  /**
   * Efecto: Cargar productos desde la API con paginación.
   */
  cargarProductos$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(ProductosAcciones.cargarProductos),
      mergeMap(({ consulta }) =>
        this.productosServicio.obtenerProductos(consulta).pipe(
          map((respuesta) =>
            ProductosAcciones.cargarProductosExito({ resultado: respuesta.datos }),
          ),
          catchError((error) =>
            of(ProductosAcciones.cargarProductosError({
              error: error.error?.mensaje || 'Error al cargar los productos.',
            })),
          ),
        ),
      ),
    ),
  );

  /**
   * Efecto: Crear un nuevo producto.
   */
  crearProducto$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(ProductosAcciones.crearProducto),
      mergeMap(({ producto }) =>
        this.productosServicio.crearProducto(producto).pipe(
          map((respuesta) =>
            ProductosAcciones.crearProductoExito({ producto: respuesta.datos }),
          ),
          catchError((error) =>
            of(ProductosAcciones.crearProductoError({
              error: error.error?.mensaje || 'Error al crear el producto.',
            })),
          ),
        ),
      ),
    ),
  );

  /**
   * Efecto: Actualizar un producto existente.
   */
  actualizarProducto$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(ProductosAcciones.actualizarProducto),
      mergeMap(({ id, producto }) =>
        this.productosServicio.actualizarProducto(id, producto).pipe(
          map((respuesta) =>
            ProductosAcciones.actualizarProductoExito({ producto: respuesta.datos }),
          ),
          catchError((error) =>
            of(ProductosAcciones.actualizarProductoError({
              error: error.error?.mensaje || 'Error al actualizar el producto.',
            })),
          ),
        ),
      ),
    ),
  );

  /**
   * Efecto: Eliminar un producto.
   */
  eliminarProducto$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(ProductosAcciones.eliminarProducto),
      mergeMap(({ id }) =>
        this.productosServicio.eliminarProducto(id).pipe(
          map(() => ProductosAcciones.eliminarProductoExito({ id })),
          catchError((error) =>
            of(ProductosAcciones.eliminarProductoError({
              error: error.error?.mensaje || 'Error al eliminar el producto.',
            })),
          ),
        ),
      ),
    ),
  );
}

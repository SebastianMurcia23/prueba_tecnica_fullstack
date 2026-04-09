import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Producto } from '../../core/modelos/producto.modelo';
import { ResultadoPaginado, ConsultaPaginada } from '../../core/modelos/respuesta-api.modelo';

/**
 * Acciones NgRx para el dominio de Productos.
 * Definen todos los eventos posibles del flujo de datos.
 */
export const ProductosAcciones = createActionGroup({
  source: 'Productos',
  events: {
    // Cargar productos
    'Cargar Productos': props<{ consulta: ConsultaPaginada }>(),
    'Cargar Productos Exito': props<{ resultado: ResultadoPaginado<Producto> }>(),
    'Cargar Productos Error': props<{ error: string }>(),

    // Crear producto
    'Crear Producto': props<{ producto: Partial<Producto> }>(),
    'Crear Producto Exito': props<{ producto: Producto }>(),
    'Crear Producto Error': props<{ error: string }>(),

    // Actualizar producto
    'Actualizar Producto': props<{ id: string; producto: Partial<Producto> }>(),
    'Actualizar Producto Exito': props<{ producto: Producto }>(),
    'Actualizar Producto Error': props<{ error: string }>(),

    // Eliminar producto
    'Eliminar Producto': props<{ id: string }>(),
    'Eliminar Producto Exito': props<{ id: string }>(),
    'Eliminar Producto Error': props<{ error: string }>(),

    // Seleccionar producto (para edición/detalle)
    'Seleccionar Producto': props<{ id: string | null }>(),

    // Limpiar mensajes
    'Limpiar Mensaje': emptyProps(),
  },
});

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductosAcciones } from '../../../estado/productos/productos.acciones';
import * as ProductosSelectores from '../../../estado/productos/productos.selectores';
import {
  Producto,
  ETIQUETAS_CATEGORIA,
  ETIQUETAS_ESTADO,
  CategoriaProducto,
  EstadoProducto,
} from '../../../core/modelos/producto.modelo';
import { SkeletonCargaComponent } from '../../../shared/componentes/skeleton-carga/skeleton-carga.component';
import { ConfirmarEliminacionComponent } from '../../../shared/componentes/confirmar-eliminacion/confirmar-eliminacion.component';
import { ModalComponent } from '../../../shared/componentes/modal/modal.component';
import { NotificacionToastComponent } from '../../../shared/componentes/notificacion-toast/notificacion-toast.component';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';

/**
 * Componente de Lista de Productos.
 * Tabla profesional con paginación, búsqueda, filtros, CRUD completo.
 * Integrado con NgRx para gestión de estado.
 */
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SkeletonCargaComponent,
    ConfirmarEliminacionComponent,
    ModalComponent,
    NotificacionToastComponent,
    FormularioProductoComponent,
  ],
  template: `
    <!-- Toast de notificaciones -->
    <app-notificacion-toast #toast></app-notificacion-toast>

    <!-- Header de la página -->
    <div class="mb-8 animate-deslizar-arriba">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-superficie-100">Productos</h1>
          <p class="text-sm text-superficie-400 mt-1">Gestione el inventario de productos del sistema</p>
        </div>
        <button class="btn-primario" (click)="abrirFormularioCrear()">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Nuevo Producto
        </button>
      </div>
    </div>

    <!-- Filtros y búsqueda -->
    <div class="tarjeta mb-6 animate-deslizar-arriba" style="animation-delay: 0.1s">
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Búsqueda -->
        <div class="flex-1 relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-superficie-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            type="text"
            [(ngModel)]="terminoBusqueda"
            (ngModelChange)="alBuscar($event)"
            class="input-campo pl-10"
            placeholder="Buscar por nombre, descripción o SKU..."
          >
        </div>
        <!-- Filtro categoría -->
        <select
          [(ngModel)]="filtroCategoria"
          (ngModelChange)="aplicarFiltros()"
          class="input-campo md:w-48"
        >
          <option value="">Todas las categorías</option>
          @for (cat of categorias; track cat.valor) {
            <option [value]="cat.valor">{{ cat.etiqueta }}</option>
          }
        </select>
        <!-- Filtro estado -->
        <select
          [(ngModel)]="filtroEstado"
          (ngModelChange)="aplicarFiltros()"
          class="input-campo md:w-40"
        >
          <option value="">Todos los estados</option>
          @for (est of estados; track est.valor) {
            <option [value]="est.valor">{{ est.etiqueta }}</option>
          }
        </select>
      </div>
    </div>

    <!-- Contenido principal -->
    @if (cargando$ | async) {
      <app-skeleton-carga tipo="tabla" [filas]="[1,2,3,4,5]" [columnas]="[1,2,3,4,5,6]"></app-skeleton-carga>
    } @else {
      <!-- Tabla de productos -->
      <div class="tarjeta overflow-hidden animate-deslizar-arriba" style="animation-delay: 0.2s">
        @if ((productos$ | async)?.length === 0) {
          <!-- Estado vacío -->
          <div class="flex flex-col items-center justify-center py-16">
            <div class="w-16 h-16 rounded-2xl bg-superficie-800 flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-superficie-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-superficie-300">No hay productos</h3>
            <p class="text-sm text-superficie-500 mt-1">Cree su primer producto para comenzar.</p>
            <button class="btn-primario mt-4" (click)="abrirFormularioCrear()">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Crear Producto
            </button>
          </div>
        } @else {
          <!-- Tabla responsive -->
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-superficie-800">
                  <th class="text-left py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider">Producto</th>
                  <th class="text-left py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider hidden md:table-cell">SKU</th>
                  <th class="text-left py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider">Categoría</th>
                  <th class="text-right py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider">Precio</th>
                  <th class="text-right py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider hidden sm:table-cell">Stock</th>
                  <th class="text-center py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider">Estado</th>
                  <th class="text-right py-3 px-4 text-xs font-semibold text-superficie-400 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-superficie-800/50">
                @for (producto of (productos$ | async); track producto._id) {
                  <tr class="fila-hover">
                    <!-- Producto (nombre + descripción) -->
                    <td class="py-3 px-4">
                      <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl bg-primario-600/10 flex items-center justify-center flex-shrink-0">
                          <svg class="w-4 h-4 text-primario-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                        </div>
                        <div class="min-w-0">
                          <p class="font-medium text-superficie-200 truncate">{{ producto.nombre }}</p>
                          <p class="text-xs text-superficie-500 truncate max-w-xs">{{ producto.descripcion }}</p>
                        </div>
                      </div>
                    </td>
                    <!-- SKU -->
                    <td class="py-3 px-4 hidden md:table-cell">
                      <code class="text-xs bg-superficie-800 px-2 py-1 rounded-lg text-superficie-300 font-mono">{{ producto.sku }}</code>
                    </td>
                    <!-- Categoría -->
                    <td class="py-3 px-4">
                      <span class="badge-info">{{ obtenerEtiquetaCategoria(producto.categoria) }}</span>
                    </td>
                    <!-- Precio -->
                    <td class="py-3 px-4 text-right font-medium text-superficie-200">
                      {{ producto.precio | currency:'COP':'symbol-narrow':'1.0-0' }}
                    </td>
                    <!-- Stock -->
                    <td class="py-3 px-4 text-right hidden sm:table-cell">
                      <span [class]="producto.cantidad === 0 ? 'text-peligro-400' : 'text-superficie-300'">
                        {{ producto.cantidad }}
                      </span>
                    </td>
                    <!-- Estado -->
                    <td class="py-3 px-4 text-center">
                      <span [class]="obtenerClaseEstado(producto.estado)">
                        {{ obtenerEtiquetaEstado(producto.estado) }}
                      </span>
                    </td>
                    <!-- Acciones -->
                    <td class="py-3 px-4">
                      <div class="flex items-center justify-end gap-1">
                        <button
                          (click)="abrirFormularioEditar(producto)"
                          class="p-2 rounded-lg text-superficie-400 hover:text-primario-400 hover:bg-primario-500/10 transition-all"
                          title="Editar"
                        >
                          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button
                          (click)="confirmarEliminar(producto)"
                          class="p-2 rounded-lg text-superficie-400 hover:text-peligro-400 hover:bg-peligro-500/10 transition-all"
                          title="Eliminar"
                        >
                          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <!-- Paginación -->
          @if ((infoPaginacion$ | async); as pag) {
            <div class="flex flex-col sm:flex-row items-center justify-between px-4 py-4 border-t border-superficie-800 gap-4">
              <p class="text-sm text-superficie-500">
                Mostrando {{ ((pag.pagina - 1) * pag.limite) + 1 }} a {{ pag.pagina * pag.limite > pag.total ? pag.total : pag.pagina * pag.limite }} de {{ pag.total }} productos
              </p>
              <div class="flex items-center gap-1">
                <button
                  class="px-3 py-1.5 rounded-lg text-sm text-superficie-400 hover:text-superficie-200 hover:bg-superficie-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  [disabled]="pag.pagina <= 1"
                  (click)="cambiarPagina(pag.pagina - 1)"
                >
                  Anterior
                </button>
                @for (p of generarPaginas(pag.totalPaginas); track p) {
                  <button
                    class="w-8 h-8 rounded-lg text-sm font-medium transition-all"
                    [class]="p === pag.pagina ? 'bg-primario-600 text-white' : 'text-superficie-400 hover:bg-superficie-800'"
                    (click)="cambiarPagina(p)"
                  >
                    {{ p }}
                  </button>
                }
                <button
                  class="px-3 py-1.5 rounded-lg text-sm text-superficie-400 hover:text-superficie-200 hover:bg-superficie-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  [disabled]="pag.pagina >= pag.totalPaginas"
                  (click)="cambiarPagina(pag.pagina + 1)"
                >
                  Siguiente
                </button>
              </div>
            </div>
          }
        }
      </div>
    }

    <!-- Modal de Formulario (Crear/Editar) -->
    <app-modal
      [abierto]="mostrarFormulario"
      [titulo]="productoEditando ? 'Editar Producto' : 'Nuevo Producto'"
      tamano="grande"
      (alCerrar)="cerrarFormulario()"
    >
      <app-formulario-producto
        [producto]="productoEditando"
        [cargando]="(cargando$ | async) || false"
        (alGuardar)="guardarProducto($event)"
        (alCancelar)="cerrarFormulario()"
      ></app-formulario-producto>
    </app-modal>

    <!-- Modal de Confirmación de Eliminación -->
    <app-confirmar-eliminacion
      [abierto]="mostrarConfirmarEliminar"
      [titulo]="'¿Eliminar producto?'"
      [mensaje]="'El producto \\'' + (productoEliminar?.nombre || '') + '\\' será eliminado permanentemente. Esta acción no se puede deshacer.'"
      [cargando]="(cargando$ | async) || false"
      (alConfirmar)="ejecutarEliminar()"
      (alCancelar)="mostrarConfirmarEliminar = false"
    ></app-confirmar-eliminacion>
  `,
})
export class ListaProductosComponent implements OnInit, OnDestroy {
  @ViewChild('toast') toast!: NotificacionToastComponent;

  // Observables del store
  productos$ = this.store.select(ProductosSelectores.seleccionarTodosProductos);
  cargando$ = this.store.select(ProductosSelectores.seleccionarCargando);
  error$ = this.store.select(ProductosSelectores.seleccionarError);
  mensajeExito$ = this.store.select(ProductosSelectores.seleccionarMensajeExito);
  infoPaginacion$ = this.store.select(ProductosSelectores.seleccionarInfoPaginacion);

  // Estado local del componente
  terminoBusqueda = '';
  filtroCategoria = '';
  filtroEstado = '';
  paginaActual = 1;

  // Modales
  mostrarFormulario = false;
  mostrarConfirmarEliminar = false;
  productoEditando: Producto | null = null;
  productoEliminar: Producto | null = null;

  // Datos para select
  categorias = Object.values(CategoriaProducto).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_CATEGORIA[v],
  }));

  estados = Object.values(EstadoProducto).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_ESTADO[v],
  }));

  private readonly destruir$ = new Subject<void>();
  private readonly busqueda$ = new Subject<string>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.cargarProductos();

    // Debounce en búsqueda
    this.busqueda$
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destruir$))
      .subscribe(() => {
        this.paginaActual = 1;
        this.cargarProductos();
      });

    // Escuchar mensajes de éxito y error
    this.mensajeExito$.pipe(takeUntil(this.destruir$)).subscribe((mensaje) => {
      if (mensaje && this.toast) {
        this.toast.mostrar('¡Éxito!', mensaje, 'exito');
        this.cerrarFormulario();
        this.mostrarConfirmarEliminar = false;
      }
    });

    this.error$.pipe(takeUntil(this.destruir$)).subscribe((error) => {
      if (error && this.toast) {
        this.toast.mostrar('Error', error, 'error');
      }
    });
  }

  ngOnDestroy(): void {
    this.destruir$.next();
    this.destruir$.complete();
  }

  cargarProductos(): void {
    this.store.dispatch(
      ProductosAcciones.cargarProductos({
        consulta: {
          pagina: this.paginaActual,
          limite: 10,
          busqueda: this.terminoBusqueda || undefined,
          categoria: this.filtroCategoria || undefined,
          estado: this.filtroEstado || undefined,
        },
      }),
    );
  }

  alBuscar(termino: string): void {
    this.busqueda$.next(termino);
  }

  aplicarFiltros(): void {
    this.paginaActual = 1;
    this.cargarProductos();
  }

  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
    this.cargarProductos();
  }

  abrirFormularioCrear(): void {
    this.productoEditando = null;
    this.mostrarFormulario = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }

  abrirFormularioEditar(producto: Producto): void {
    this.productoEditando = { ...producto };
    this.mostrarFormulario = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.productoEditando = null;
  }

  guardarProducto(datos: Partial<Producto>): void {
    if (this.productoEditando) {
      this.store.dispatch(
        ProductosAcciones.actualizarProducto({
          id: this.productoEditando._id,
          producto: datos,
        }),
      );
    } else {
      this.store.dispatch(ProductosAcciones.crearProducto({ producto: datos }));
    }
  }

  confirmarEliminar(producto: Producto): void {
    this.productoEliminar = producto;
    this.mostrarConfirmarEliminar = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }

  ejecutarEliminar(): void {
    if (this.productoEliminar) {
      this.store.dispatch(
        ProductosAcciones.eliminarProducto({ id: this.productoEliminar._id }),
      );
    }
  }

  obtenerEtiquetaCategoria(categoria: CategoriaProducto): string {
    return ETIQUETAS_CATEGORIA[categoria] || categoria;
  }

  obtenerEtiquetaEstado(estado: EstadoProducto): string {
    return ETIQUETAS_ESTADO[estado] || estado;
  }

  obtenerClaseEstado(estado: EstadoProducto): string {
    switch (estado) {
      case EstadoProducto.ACTIVO:
        return 'badge-exito';
      case EstadoProducto.INACTIVO:
        return 'badge-advertencia';
      case EstadoProducto.AGOTADO:
        return 'badge-peligro';
      default:
        return 'badge-info';
    }
  }

  generarPaginas(total: number): number[] {
    const paginas: number[] = [];
    const max = Math.min(total, 5);
    let inicio = Math.max(1, this.paginaActual - 2);
    const fin = Math.min(total, inicio + max - 1);
    inicio = Math.max(1, fin - max + 1);
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  }
}

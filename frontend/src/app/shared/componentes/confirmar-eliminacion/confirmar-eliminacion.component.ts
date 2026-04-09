import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de Modal de Confirmación.
 * Usado para confirmar acciones destructivas como eliminar.
 */
@Component({
  selector: 'app-confirmar-eliminacion',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (abierto) {
      <div class="overlay-modal" (click)="cerrarPorOverlay($event)">
        <div class="bg-superficie-900 border border-superficie-800 rounded-2xl shadow-modal w-full max-w-md mx-4 animate-aparecer">
          <div class="p-6 text-center">
            <!-- Ícono de advertencia -->
            <div class="mx-auto w-14 h-14 rounded-full bg-peligro-500/10 flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-peligro-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>

            <h3 class="text-lg font-semibold text-superficie-100 mb-2">{{ titulo }}</h3>
            <p class="text-sm text-superficie-400 mb-6">{{ mensaje }}</p>

            <div class="flex gap-3 justify-center">
              <button
                class="btn-secundario"
                (click)="alCancelar.emit()"
              >
                Cancelar
              </button>
              <button
                class="btn-peligro"
                (click)="alConfirmar.emit()"
                [disabled]="cargando"
              >
                @if (cargando) {
                  <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                }
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class ConfirmarEliminacionComponent {
  @Input() abierto = false;
  @Input() titulo = '¿Confirmar eliminación?';
  @Input() mensaje = 'Esta acción no se puede deshacer. ¿Está seguro de que desea continuar?';
  @Input() cargando = false;
  @Output() alConfirmar = new EventEmitter<void>();
  @Output() alCancelar = new EventEmitter<void>();

  cerrarPorOverlay(evento: MouseEvent) {
    if ((evento.target as Element).classList.contains('overlay-modal')) {
      this.alCancelar.emit();
    }
  }
}

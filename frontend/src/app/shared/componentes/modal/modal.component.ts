import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Modal reutilizable.
 * Overlay con animación, contenido personalizable y acciones.
 */
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (abierto) {
      <div class="overlay-modal" (click)="cerrarPorOverlay($event)">
        <div
          class="bg-superficie-900 border border-superficie-800 rounded-2xl shadow-modal
                 w-full max-w-lg mx-4 animate-aparecer"
          [class.max-w-xl]="tamano === 'grande'"
          [class.max-w-md]="tamano === 'pequeno'"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b border-superficie-800">
            <h2 class="text-lg font-semibold text-superficie-100">{{ titulo }}</h2>
            <button
              (click)="alCerrar.emit()"
              class="text-superficie-400 hover:text-superficie-200 transition-colors p-1 rounded-lg hover:bg-superficie-800"
            >
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
})
export class ModalComponent {
  @Input() abierto = false;
  @Input() titulo = '';
  @Input() tamano: 'pequeno' | 'normal' | 'grande' = 'normal';
  @Output() alCerrar = new EventEmitter<void>();

  cerrarPorOverlay(evento: MouseEvent) {
    if ((evento.target as Element).classList.contains('overlay-modal')) {
      this.alCerrar.emit();
    }
  }
}

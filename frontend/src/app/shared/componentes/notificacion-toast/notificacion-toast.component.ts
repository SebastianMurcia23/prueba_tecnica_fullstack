import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente de Notificación Toast.
 * Muestra mensajes de éxito o error con animación.
 */
@Component({
  selector: 'app-notificacion-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible) {
      <div class="fixed top-6 right-6 z-50 animate-deslizar-derecha max-w-sm">
        <div
          [class]="'flex items-start gap-3 p-4 rounded-xl border shadow-flotante ' + clasesPorTipo"
        >
          <!-- Ícono -->
          <div [class]="'flex-shrink-0 w-5 h-5 mt-0.5 ' + claseIcono">
            @if (tipo === 'exito') {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            }
            @if (tipo === 'error') {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            }
          </div>
          <!-- Mensaje -->
          <div class="flex-1">
            <p class="text-sm font-medium">{{ titulo }}</p>
            <p class="text-sm opacity-80 mt-0.5">{{ mensaje }}</p>
          </div>
          <!-- Cerrar -->
          <button (click)="cerrar()" class="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    }
  `,
})
export class NotificacionToastComponent {
  @Input() tipo: 'exito' | 'error' = 'exito';
  @Input() titulo = '';
  @Input() mensaje = '';
  @Input() duracion = 4000;

  visible = false;
  private temporizador: any;

  get clasesPorTipo(): string {
    return this.tipo === 'exito'
      ? 'bg-exito-500/10 border-exito-500/20 text-exito-400'
      : 'bg-peligro-500/10 border-peligro-500/20 text-peligro-400';
  }

  get claseIcono(): string {
    return this.tipo === 'exito' ? 'text-exito-400' : 'text-peligro-400';
  }

  mostrar(titulo: string, mensaje: string, tipo: 'exito' | 'error' = 'exito') {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.tipo = tipo;
    this.visible = true;

    clearTimeout(this.temporizador);
    this.temporizador = setTimeout(() => this.cerrar(), this.duracion);
  }

  cerrar() {
    this.visible = false;
    clearTimeout(this.temporizador);
  }
}

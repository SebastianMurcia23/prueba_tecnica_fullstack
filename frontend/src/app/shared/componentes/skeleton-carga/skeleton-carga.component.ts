import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Componente Skeleton de Carga.
 * Muestra placeholders animados mientras los datos se cargan.
 * Estilo "shimmer" tipo Vercel/Stripe.
 */
@Component({
  selector: 'app-skeleton-carga',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-4 animate-pulse">
      @if (tipo === 'tabla') {
        <!-- Skeleton de tabla -->
        <div class="tarjeta overflow-hidden">
          <!-- Header -->
          <div class="flex gap-4 p-4 border-b border-superficie-800">
            @for (col of columnas; track col) {
              <div class="skeleton h-4 flex-1 rounded"></div>
            }
          </div>
          <!-- Filas -->
          @for (fila of filas; track fila) {
            <div class="flex gap-4 p-4 border-b border-superficie-800/50">
              @for (col of columnas; track col) {
                <div class="skeleton h-4 flex-1 rounded" [style.max-width.%]="aleatorio(50, 90)"></div>
              }
            </div>
          }
        </div>
      }

      @if (tipo === 'tarjeta') {
        <!-- Skeleton de tarjeta -->
        <div class="tarjeta">
          <div class="skeleton h-6 w-3/4 rounded mb-4"></div>
          <div class="skeleton h-4 w-full rounded mb-2"></div>
          <div class="skeleton h-4 w-5/6 rounded mb-4"></div>
          <div class="flex gap-3">
            <div class="skeleton h-10 w-24 rounded-xl"></div>
            <div class="skeleton h-10 w-24 rounded-xl"></div>
          </div>
        </div>
      }

      @if (tipo === 'formulario') {
        <!-- Skeleton de formulario -->
        <div class="space-y-6">
          @for (campo of [1,2,3,4]; track campo) {
            <div>
              <div class="skeleton h-4 w-1/4 rounded mb-2"></div>
              <div class="skeleton h-10 w-full rounded-xl"></div>
            </div>
          }
          <div class="flex gap-3 justify-end">
            <div class="skeleton h-10 w-24 rounded-xl"></div>
            <div class="skeleton h-10 w-32 rounded-xl"></div>
          </div>
        </div>
      }
    </div>
  `,
})
export class SkeletonCargaComponent {
  @Input() tipo: 'tabla' | 'tarjeta' | 'formulario' = 'tabla';
  @Input() filas: number[] = [1, 2, 3, 4, 5];
  @Input() columnas: number[] = [1, 2, 3, 4, 5];

  aleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

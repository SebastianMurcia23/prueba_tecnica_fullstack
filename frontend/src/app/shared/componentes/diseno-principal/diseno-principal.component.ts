import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AutenticacionServicio } from '../../../servicios/autenticacion.servicio';

/**
 * Componente de diseño principal (layout).
 * Sidebar + header + contenido principal.
 * Estilo SaaS premium tipo Vercel/Stripe.
 */
@Component({
  selector: 'app-diseno-principal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="min-h-screen flex bg-superficie-950">
      <!-- Sidebar -->
      <aside class="hidden lg:flex lg:flex-col lg:w-64 bg-superficie-900 border-r border-superficie-800">
        <!-- Logo -->
        <div class="flex items-center gap-3 px-6 py-5 border-b border-superficie-800">
          <div class="w-8 h-8 rounded-xl bg-primario-600 flex items-center justify-center">
            <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <div>
            <h1 class="text-sm font-bold text-superficie-100">Gestión de</h1>
            <p class="text-xs text-superficie-400">Productos</p>
          </div>
        </div>

        <!-- Navegación -->
        <nav class="flex-1 px-3 py-4 space-y-1">
          <a routerLink="/productos"
             class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-superficie-300 hover:text-superficie-100 hover:bg-superficie-800 transition-all">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            Productos
          </a>
        </nav>

        <!-- Usuario footer -->
        <div class="px-3 py-4 border-t border-superficie-800">
          <div class="flex items-center gap-3 px-3 py-2">
            <div class="w-8 h-8 rounded-full bg-primario-600/20 flex items-center justify-center">
              <span class="text-sm font-semibold text-primario-400">
                {{ obtenerInicial() }}
              </span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-superficie-200 truncate">{{ nombreUsuario }}</p>
              <p class="text-xs text-superficie-500 truncate">{{ correoUsuario }}</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Contenido principal -->
      <div class="flex-1 flex flex-col min-h-screen">
        <!-- Header -->
        <header class="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-superficie-950/80 backdrop-blur-xl border-b border-superficie-800">
          <!-- Mobile menu toggle -->
          <button class="lg:hidden text-superficie-400 hover:text-superficie-200" (click)="menuMovilAbierto = !menuMovilAbierto">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          </button>

          <div class="flex-1"></div>

          <!-- Acciones del header -->
          <div class="flex items-center gap-3">
            <button
              (click)="cerrarSesion()"
              class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-superficie-400 hover:text-peligro-400 hover:bg-peligro-500/10 transition-all"
            >
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Cerrar sesión
            </button>
          </div>
        </header>

        <!-- Contenido -->
        <main class="flex-1 p-6">
          <router-outlet></router-outlet>
        </main>
      </div>

      <!-- Mobile sidebar overlay -->
      @if (menuMovilAbierto) {
        <div class="fixed inset-0 z-40 lg:hidden" (click)="menuMovilAbierto = false">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <aside class="relative w-64 h-full bg-superficie-900 border-r border-superficie-800 animate-deslizar-derecha">
            <div class="flex items-center gap-3 px-6 py-5 border-b border-superficie-800">
              <div class="w-8 h-8 rounded-xl bg-primario-600 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              </div>
              <h1 class="text-sm font-bold text-white">Gestión de Productos</h1>
            </div>
            <nav class="px-3 py-4">
              <a routerLink="/productos" (click)="menuMovilAbierto = false"
                 class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-superficie-300 hover:text-white hover:bg-superficie-800">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                Productos
              </a>
            </nav>
          </aside>
        </div>
      }
    </div>
  `,
})
export class DisenoPrincipalComponent {
  menuMovilAbierto = false;
  nombreUsuario = '';
  correoUsuario = '';

  constructor(
    private readonly autenticacionServicio: AutenticacionServicio,
    private readonly router: Router,
  ) {
    const usuario = this.autenticacionServicio.obtenerUsuario();
    if (usuario) {
      this.nombreUsuario = usuario.nombre;
      this.correoUsuario = usuario.correoElectronico;
    }
  }

  obtenerInicial(): string {
    return this.nombreUsuario ? this.nombreUsuario.charAt(0).toUpperCase() : 'U';
  }

  cerrarSesion(): void {
    this.autenticacionServicio.cerrarSesion();
    this.router.navigate(['/iniciar-sesion']);
  }
}

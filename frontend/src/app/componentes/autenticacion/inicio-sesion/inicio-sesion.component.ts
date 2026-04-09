import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionServicio } from '../../../servicios/autenticacion.servicio';

/**
 * Componente de Inicio de Sesión.
 * Formulario reactivo con validaciones y estética SaaS premium.
 */
@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-superficie-950 px-4">
      <div class="w-full max-w-md animate-deslizar-arriba">
        <!-- Logo -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primario-600 mb-4">
            <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <h1 class="text-2xl font-bold text-superficie-100">Gestión de Productos</h1>
          <p class="text-superficie-400 text-sm mt-2">Ingrese sus credenciales para acceder al sistema</p>
        </div>

        <!-- Formulario -->
        <div class="tarjeta">
          <form [formGroup]="formulario" (ngSubmit)="iniciarSesion()" class="space-y-5">
            <!-- Correo -->
            <div>
              <label for="correo" class="input-etiqueta">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                formControlName="correoElectronico"
                class="input-campo"
                placeholder="ejemplo@correo.com"
                autocomplete="email"
              >
              @if (formulario.get('correoElectronico')?.touched && formulario.get('correoElectronico')?.errors) {
                <p class="input-error">
                  @if (formulario.get('correoElectronico')?.errors?.['required']) {
                    El correo electrónico es obligatorio.
                  }
                  @if (formulario.get('correoElectronico')?.errors?.['email']) {
                    Ingrese un correo electrónico válido.
                  }
                </p>
              }
            </div>

            <!-- Contraseña -->
            <div>
              <label for="contrasena" class="input-etiqueta">Contraseña</label>
              <input
                id="contrasena"
                type="password"
                formControlName="contrasena"
                class="input-campo"
                placeholder="••••••••"
                autocomplete="current-password"
              >
              @if (formulario.get('contrasena')?.touched && formulario.get('contrasena')?.errors) {
                <p class="input-error">
                  @if (formulario.get('contrasena')?.errors?.['required']) {
                    La contraseña es obligatoria.
                  }
                  @if (formulario.get('contrasena')?.errors?.['minlength']) {
                    La contraseña debe tener al menos 6 caracteres.
                  }
                </p>
              }
            </div>

            <!-- Error del servidor -->
            @if (errorServidor) {
              <div class="flex items-center gap-2 p-3 rounded-xl bg-peligro-500/10 border border-peligro-500/20 text-peligro-400 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ errorServidor }}
              </div>
            }

            <!-- Botón submit -->
            <button
              type="submit"
              class="btn-primario w-full justify-center"
              [disabled]="formulario.invalid || cargando"
            >
              @if (cargando) {
                <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                Iniciando sesión...
              } @else {
                Iniciar sesión
              }
            </button>
          </form>

          <!-- Enlace registro -->
          <div class="mt-6 text-center">
            <p class="text-sm text-superficie-500">
              ¿No tiene cuenta?
              <a routerLink="/registrar" class="text-primario-400 hover:text-primario-300 font-medium transition-colors">
                Regístrese aquí
              </a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <p class="text-center text-xs text-superficie-600 mt-6">
          Sistema de Gestión de Productos — Sector Agropecuario
        </p>
      </div>
    </div>
  `,
})
export class InicioSesionComponent {
  formulario: FormGroup;
  cargando = false;
  errorServidor: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly autenticacionServicio: AutenticacionServicio,
    private readonly router: Router,
  ) {
    this.formulario = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  iniciarSesion(): void {
    if (this.formulario.invalid) return;

    this.cargando = true;
    this.errorServidor = null;

    this.autenticacionServicio.iniciarSesion(this.formulario.value).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        this.cargando = false;
        this.errorServidor = error.error?.mensaje || 'Error al iniciar sesión. Intente nuevamente.';
      },
    });
  }
}

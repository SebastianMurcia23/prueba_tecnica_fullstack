import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionServicio } from '../../../servicios/autenticacion.servicio';

/**
 * Componente de Registro de usuario nuevo.
 */
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-superficie-950 px-4">
      <div class="w-full max-w-md animate-deslizar-arriba">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primario-600 mb-4">
            <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
          </div>
          <h1 class="text-2xl font-bold text-superficie-100">Crear cuenta</h1>
          <p class="text-superficie-400 text-sm mt-2">Complete los datos para registrarse en el sistema</p>
        </div>

        <div class="tarjeta">
          <form [formGroup]="formulario" (ngSubmit)="registrar()" class="space-y-5">
            <div>
              <label for="nombre" class="input-etiqueta">Nombre completo</label>
              <input id="nombre" type="text" formControlName="nombre" class="input-campo" placeholder="Juan Carlos Pérez" autocomplete="name">
              @if (formulario.get('nombre')?.touched && formulario.get('nombre')?.errors) {
                <p class="input-error">
                  @if (formulario.get('nombre')?.errors?.['required']) { El nombre es obligatorio. }
                  @if (formulario.get('nombre')?.errors?.['minlength']) { El nombre debe tener al menos 2 caracteres. }
                </p>
              }
            </div>

            <div>
              <label for="correo" class="input-etiqueta">Correo electrónico</label>
              <input id="correo" type="email" formControlName="correoElectronico" class="input-campo" placeholder="ejemplo@correo.com" autocomplete="email">
              @if (formulario.get('correoElectronico')?.touched && formulario.get('correoElectronico')?.errors) {
                <p class="input-error">
                  @if (formulario.get('correoElectronico')?.errors?.['required']) { El correo electrónico es obligatorio. }
                  @if (formulario.get('correoElectronico')?.errors?.['email']) { Ingrese un correo electrónico válido. }
                </p>
              }
            </div>

            <div>
              <label for="contrasena" class="input-etiqueta">Contraseña</label>
              <input id="contrasena" type="password" formControlName="contrasena" class="input-campo" placeholder="Mínimo 6 caracteres" autocomplete="new-password">
              @if (formulario.get('contrasena')?.touched && formulario.get('contrasena')?.errors) {
                <p class="input-error">
                  @if (formulario.get('contrasena')?.errors?.['required']) { La contraseña es obligatoria. }
                  @if (formulario.get('contrasena')?.errors?.['minlength']) { Debe tener al menos 6 caracteres. }
                </p>
              }
            </div>

            @if (errorServidor) {
              <div class="flex items-center gap-2 p-3 rounded-xl bg-peligro-500/10 border border-peligro-500/20 text-peligro-400 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ errorServidor }}
              </div>
            }

            <button type="submit" class="btn-primario w-full justify-center" [disabled]="formulario.invalid || cargando">
              @if (cargando) {
                <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                Creando cuenta...
              } @else {
                Crear cuenta
              }
            </button>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-superficie-500">
              ¿Ya tiene cuenta?
              <a routerLink="/iniciar-sesion" class="text-primario-400 hover:text-primario-300 font-medium transition-colors">Inicie sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegistroComponent {
  formulario: FormGroup;
  cargando = false;
  errorServidor: string | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly autenticacionServicio: AutenticacionServicio,
    private readonly router: Router,
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  registrar(): void {
    if (this.formulario.invalid) return;
    this.cargando = true;
    this.errorServidor = null;

    this.autenticacionServicio.registrar(this.formulario.value).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(['/productos']);
      },
      error: (error) => {
        this.cargando = false;
        this.errorServidor = error.error?.mensaje || 'Error al registrar. Intente nuevamente.';
      },
    });
  }
}

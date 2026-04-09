import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Guard funcional de autenticación.
 * Protege rutas que requieren un token JWT válido en localStorage.
 * Redirige a /iniciar-sesion si no hay token.
 */
export const autenticacionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token_acceso');

  if (token) {
    return true;
  }

  router.navigate(['/iniciar-sesion']);
  return false;
};

/**
 * Guard funcional inverso de autenticación.
 * Evita que usuarios ya autenticados accedan al login/registro.
 * Redirige a /productos si ya hay token.
 */
export const noAutenticacionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token_acceso');

  if (!token) {
    return true;
  }

  router.navigate(['/productos']);
  return false;
};

import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor funcional JWT.
 * Adjunta el token Bearer a todas las solicitudes HTTP salientes.
 * Si el token ha expirado (401), redirige al login.
 */
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem('token_acceso');

  // Clonar la solicitud con el header de autorización si hay token
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Si el token expiró o es inválido, limpiar sesión y redirigir
      if (error.status === 401) {
        localStorage.removeItem('token_acceso');
        localStorage.removeItem('usuario');
        router.navigate(['/iniciar-sesion']);
      }
      return throwError(() => error);
    }),
  );
};

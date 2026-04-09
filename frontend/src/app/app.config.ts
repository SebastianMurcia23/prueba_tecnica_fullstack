import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptores/jwt.interceptor';
import { productosReductor } from './estado/productos/productos.reductor';
import { ProductosEfectos } from './estado/productos/productos.efectos';
import { ambiente } from '../ambientes/ambiente';

/**
 * Configuración raíz de la aplicación Angular.
 * Registra proveedores para:
 * - Router con lazy loading
 * - HttpClient con interceptor JWT
 * - NgRx Store + Effects + DevTools
 * - Animaciones
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideAnimations(),

    // NgRx Store
    provideStore({
      productos: productosReductor,
    }),

    // NgRx Effects
    provideEffects([ProductosEfectos]),

    // NgRx DevTools (solo en desarrollo)
    ...(ambiente.produccion
      ? []
      : [provideStoreDevtools({ maxAge: 25, logOnly: false })]),
  ],
};

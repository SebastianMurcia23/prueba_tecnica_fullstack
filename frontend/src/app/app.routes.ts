import { Routes } from '@angular/router';
import { autenticacionGuard, noAutenticacionGuard } from './core/guardias/autenticacion.guard';

/**
 * Definición de rutas de la aplicación.
 * Rutas públicas: login, registro.
 * Rutas protegidas: productos (requieren JWT).
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'iniciar-sesion',
    canActivate: [noAutenticacionGuard],
    loadComponent: () =>
      import('./componentes/autenticacion/inicio-sesion/inicio-sesion.component').then(
        (m) => m.InicioSesionComponent,
      ),
  },
  {
    path: 'registrar',
    canActivate: [noAutenticacionGuard],
    loadComponent: () =>
      import('./componentes/autenticacion/registro/registro.component').then(
        (m) => m.RegistroComponent,
      ),
  },
  {
    path: '',
    canActivate: [autenticacionGuard],
    loadComponent: () =>
      import('./shared/componentes/diseno-principal/diseno-principal.component').then(
        (m) => m.DisenoPrincipalComponent,
      ),
    children: [
      {
        path: 'productos',
        loadComponent: () =>
          import('./componentes/productos/lista-productos/lista-productos.component').then(
            (m) => m.ListaProductosComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'productos',
  },
];

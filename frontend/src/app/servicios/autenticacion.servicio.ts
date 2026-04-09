import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ambiente } from '../../ambientes/ambiente';
import { RespuestaApi } from '../core/modelos/respuesta-api.modelo';
import {
  RespuestaAutenticacion,
  CredencialesLogin,
  DatosRegistro,
  Usuario,
} from '../core/modelos/usuario.modelo';

/**
 * Servicio de Autenticación.
 * Maneja registro, login, logout y persistencia del token JWT.
 */
@Injectable({ providedIn: 'root' })
export class AutenticacionServicio {
  private readonly urlBase = `${ambiente.apiUrl}/autenticacion`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Registra un nuevo usuario en el sistema.
   */
  registrar(datos: DatosRegistro): Observable<RespuestaApi<RespuestaAutenticacion>> {
    return this.http.post<RespuestaApi<RespuestaAutenticacion>>(
      `${this.urlBase}/registrar`,
      datos,
    ).pipe(
      tap((respuesta) => {
        if (respuesta.exito && respuesta.datos) {
          this.guardarSesion(respuesta.datos);
        }
      }),
    );
  }

  /**
   * Inicia sesión con credenciales de usuario.
   */
  iniciarSesion(credenciales: CredencialesLogin): Observable<RespuestaApi<RespuestaAutenticacion>> {
    return this.http.post<RespuestaApi<RespuestaAutenticacion>>(
      `${this.urlBase}/iniciar-sesion`,
      credenciales,
    ).pipe(
      tap((respuesta) => {
        if (respuesta.exito && respuesta.datos) {
          this.guardarSesion(respuesta.datos);
        }
      }),
    );
  }

  /**
   * Cierra la sesión eliminando los datos del localStorage.
   */
  cerrarSesion(): void {
    localStorage.removeItem('token_acceso');
    localStorage.removeItem('usuario');
  }

  /**
   * Verifica si el usuario tiene una sesión activa.
   */
  estaAutenticado(): boolean {
    return !!localStorage.getItem('token_acceso');
  }

  /**
   * Obtiene el token JWT almacenado.
   */
  obtenerToken(): string | null {
    return localStorage.getItem('token_acceso');
  }

  /**
   * Obtiene los datos del usuario almacenado.
   */
  obtenerUsuario(): Usuario | null {
    const datosUsuario = localStorage.getItem('usuario');
    if (datosUsuario) {
      try {
        return JSON.parse(datosUsuario);
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * Guarda los datos de sesión en localStorage.
   */
  private guardarSesion(datos: RespuestaAutenticacion): void {
    localStorage.setItem('token_acceso', datos.tokenAcceso);
    localStorage.setItem('usuario', JSON.stringify(datos.usuario));
  }
}

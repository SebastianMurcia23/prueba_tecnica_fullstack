import {
  HttpClient,
  ambiente
} from "./chunk-2YL5TQRH.js";
import {
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BK2WVXHI.js";

// src/app/servicios/autenticacion.servicio.ts
var AutenticacionServicio = class _AutenticacionServicio {
  constructor(http) {
    this.http = http;
    this.urlBase = `${ambiente.apiUrl}/autenticacion`;
  }
  /**
   * Registra un nuevo usuario en el sistema.
   */
  registrar(datos) {
    return this.http.post(`${this.urlBase}/registrar`, datos).pipe(tap((respuesta) => {
      if (respuesta.exito && respuesta.datos) {
        this.guardarSesion(respuesta.datos);
      }
    }));
  }
  /**
   * Inicia sesión con credenciales de usuario.
   */
  iniciarSesion(credenciales) {
    return this.http.post(`${this.urlBase}/iniciar-sesion`, credenciales).pipe(tap((respuesta) => {
      if (respuesta.exito && respuesta.datos) {
        this.guardarSesion(respuesta.datos);
      }
    }));
  }
  /**
   * Cierra la sesión eliminando los datos del localStorage.
   */
  cerrarSesion() {
    localStorage.removeItem("token_acceso");
    localStorage.removeItem("usuario");
  }
  /**
   * Verifica si el usuario tiene una sesión activa.
   */
  estaAutenticado() {
    return !!localStorage.getItem("token_acceso");
  }
  /**
   * Obtiene el token JWT almacenado.
   */
  obtenerToken() {
    return localStorage.getItem("token_acceso");
  }
  /**
   * Obtiene los datos del usuario almacenado.
   */
  obtenerUsuario() {
    const datosUsuario = localStorage.getItem("usuario");
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
  guardarSesion(datos) {
    localStorage.setItem("token_acceso", datos.tokenAcceso);
    localStorage.setItem("usuario", JSON.stringify(datos.usuario));
  }
  static {
    this.\u0275fac = function AutenticacionServicio_Factory(t) {
      return new (t || _AutenticacionServicio)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AutenticacionServicio, factory: _AutenticacionServicio.\u0275fac, providedIn: "root" });
  }
};

export {
  AutenticacionServicio
};
//# sourceMappingURL=chunk-E3XJHC7M.js.map

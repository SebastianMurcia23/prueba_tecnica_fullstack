/**
 * Modelo de Usuario en el frontend.
 */
export interface Usuario {
  id: string;
  nombre: string;
  correoElectronico: string;
  rol: string;
}

/**
 * Respuesta de autenticación del backend.
 */
export interface RespuestaAutenticacion {
  tokenAcceso: string;
  usuario: Usuario;
}

/**
 * Credenciales para inicio de sesión.
 */
export interface CredencialesLogin {
  correoElectronico: string;
  contrasena: string;
}

/**
 * Datos para registro de usuario.
 */
export interface DatosRegistro {
  nombre: string;
  correoElectronico: string;
  contrasena: string;
  rol?: string;
}

import { RegistrarUsuarioDto } from '../../dtos/registrar-usuario.dto';
import { IniciarSesionDto } from '../../dtos/iniciar-sesion.dto';

/**
 * Respuesta estándar de autenticación con token JWT.
 */
export interface RespuestaAutenticacion {
  tokenAcceso: string;
  usuario: {
    id: string;
    nombre: string;
    correoElectronico: string;
    rol: string;
  };
}

/**
 * Payload del token JWT.
 */
export interface PayloadJwt {
  sub: string;
  correoElectronico: string;
  rol: string;
}

/**
 * Interfaz del Servicio de Autenticación.
 * Define el contrato de la lógica de negocio para autenticación y autorización.
 */
export interface IAutenticacionServicio {
  /**
   * Registra un nuevo usuario en el sistema.
   * - Verifica que el correo no esté registrado
   * - Hashea la contraseña automáticamente via hook de Mongoose
   * - Genera token JWT
   */
  registrarUsuario(
    registrarUsuarioDto: RegistrarUsuarioDto,
  ): Promise<RespuestaAutenticacion>;

  /**
   * Inicia sesión verificando credenciales.
   * - Busca usuario por correo
   * - Compara contraseña con hash
   * - Genera token JWT
   * @throws UnauthorizedException si las credenciales son inválidas
   */
  iniciarSesion(
    iniciarSesionDto: IniciarSesionDto,
  ): Promise<RespuestaAutenticacion>;

  /**
   * Valida un usuario a partir del payload del JWT.
   * Utilizado por la estrategia Passport JWT.
   */
  validarUsuarioPorJwt(payload: PayloadJwt): Promise<any>;
}

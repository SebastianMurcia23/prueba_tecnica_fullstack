import { UsuarioDocumento } from '../entidades/usuario.entidad';

/**
 * Interfaz del Repositorio de Usuarios.
 * Define el contrato de acceso a datos para la entidad Usuario.
 */
export interface IUsuarioRepositorio {
  /**
   * Crea un nuevo usuario en la base de datos.
   * @param datosUsuario - Datos del usuario a registrar
   * @returns Usuario creado con su ID generado
   */
  crear(datosUsuario: Partial<UsuarioDocumento>): Promise<UsuarioDocumento>;

  /**
   * Busca un usuario por su correo electrónico.
   * @param correo - Correo electrónico del usuario
   * @returns Usuario encontrado o null
   */
  buscarPorCorreo(correo: string): Promise<UsuarioDocumento | null>;

  /**
   * Busca un usuario por su ID único.
   * @param id - Identificador MongoDB del usuario
   * @returns Usuario encontrado o null
   */
  buscarPorId(id: string): Promise<UsuarioDocumento | null>;
}

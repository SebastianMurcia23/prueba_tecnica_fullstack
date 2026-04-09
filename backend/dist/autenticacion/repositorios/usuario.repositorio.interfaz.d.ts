import { UsuarioDocumento } from '../entidades/usuario.entidad';
export interface IUsuarioRepositorio {
    crear(datosUsuario: Partial<UsuarioDocumento>): Promise<UsuarioDocumento>;
    buscarPorCorreo(correo: string): Promise<UsuarioDocumento | null>;
    buscarPorId(id: string): Promise<UsuarioDocumento | null>;
}

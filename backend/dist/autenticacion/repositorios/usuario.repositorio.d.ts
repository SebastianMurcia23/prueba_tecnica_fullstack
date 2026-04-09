import { Model } from 'mongoose';
import { UsuarioDocumento } from '../entidades/usuario.entidad';
import { IUsuarioRepositorio } from './usuario.repositorio.interfaz';
export declare class UsuarioRepositorio implements IUsuarioRepositorio {
    private readonly usuarioModelo;
    constructor(usuarioModelo: Model<UsuarioDocumento>);
    crear(datosUsuario: Partial<UsuarioDocumento>): Promise<UsuarioDocumento>;
    buscarPorCorreo(correo: string): Promise<UsuarioDocumento | null>;
    buscarPorId(id: string): Promise<UsuarioDocumento | null>;
}

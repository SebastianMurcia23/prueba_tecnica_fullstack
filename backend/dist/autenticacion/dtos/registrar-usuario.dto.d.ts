import { RolUsuario } from '../entidades/usuario.entidad';
export declare class RegistrarUsuarioDto {
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    rol?: RolUsuario;
}

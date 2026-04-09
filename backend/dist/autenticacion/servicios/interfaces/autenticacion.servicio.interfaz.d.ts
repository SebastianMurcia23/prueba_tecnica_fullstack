import { RegistrarUsuarioDto } from '../../dtos/registrar-usuario.dto';
import { IniciarSesionDto } from '../../dtos/iniciar-sesion.dto';
export interface RespuestaAutenticacion {
    tokenAcceso: string;
    usuario: {
        id: string;
        nombre: string;
        correoElectronico: string;
        rol: string;
    };
}
export interface PayloadJwt {
    sub: string;
    correoElectronico: string;
    rol: string;
}
export interface IAutenticacionServicio {
    registrarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<RespuestaAutenticacion>;
    iniciarSesion(iniciarSesionDto: IniciarSesionDto): Promise<RespuestaAutenticacion>;
    validarUsuarioPorJwt(payload: PayloadJwt): Promise<any>;
}

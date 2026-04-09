import { JwtService } from '@nestjs/jwt';
import { IAutenticacionServicio, RespuestaAutenticacion, PayloadJwt } from '../interfaces/autenticacion.servicio.interfaz';
import { IUsuarioRepositorio } from '../../repositorios/usuario.repositorio.interfaz';
import { RegistrarUsuarioDto } from '../../dtos/registrar-usuario.dto';
import { IniciarSesionDto } from '../../dtos/iniciar-sesion.dto';
export declare class AutenticacionServicioImpl implements IAutenticacionServicio {
    private readonly usuarioRepositorio;
    private readonly jwtServicio;
    private readonly logger;
    constructor(usuarioRepositorio: IUsuarioRepositorio, jwtServicio: JwtService);
    registrarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<RespuestaAutenticacion>;
    iniciarSesion(iniciarSesionDto: IniciarSesionDto): Promise<RespuestaAutenticacion>;
    validarUsuarioPorJwt(payload: PayloadJwt): Promise<any>;
}

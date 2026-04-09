import { HttpStatus } from '@nestjs/common';
import { IAutenticacionServicio } from '../servicios/interfaces/autenticacion.servicio.interfaz';
import { IniciarSesionDto } from '../dtos/iniciar-sesion.dto';
import { RegistrarUsuarioDto } from '../dtos/registrar-usuario.dto';
export declare class AutenticacionControlador {
    private readonly autenticacionServicio;
    private readonly logger;
    constructor(autenticacionServicio: IAutenticacionServicio);
    registrar(registrarUsuarioDto: RegistrarUsuarioDto): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../servicios/interfaces/autenticacion.servicio.interfaz").RespuestaAutenticacion;
        codigoEstado: HttpStatus;
    }>;
    iniciarSesion(iniciarSesionDto: IniciarSesionDto): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../servicios/interfaces/autenticacion.servicio.interfaz").RespuestaAutenticacion;
        codigoEstado: HttpStatus;
    }>;
}

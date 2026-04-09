import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Inject } from '@nestjs/common';
import { IAutenticacionServicio } from '../servicios/interfaces/autenticacion.servicio.interfaz';
import { IniciarSesionDto } from '../dtos/iniciar-sesion.dto';
import { RegistrarUsuarioDto } from '../dtos/registrar-usuario.dto';

/**
 * Controlador de Autenticación.
 * Endpoints públicos para registro e inicio de sesión.
 * NO requieren JWT (son los que generan el token).
 */
@ApiTags('Autenticación')
@Controller('autenticacion')
export class AutenticacionControlador {
  private readonly logger = new Logger(AutenticacionControlador.name);

  constructor(
    @Inject('AUTENTICACION_SERVICIO')
    private readonly autenticacionServicio: IAutenticacionServicio,
  ) {}

  /**
   * POST /api/autenticacion/registrar - Registrar nuevo usuario
   */
  @Post('registrar')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Registrar un nuevo usuario',
    description: 'Crea una nueva cuenta de usuario y devuelve un token JWT de acceso.',
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario registrado exitosamente. Retorna token JWT.',
  })
  @ApiResponse({
    status: 400,
    description: 'Error de validación en los datos enviados.',
  })
  @ApiResponse({
    status: 409,
    description: 'Ya existe una cuenta con este correo electrónico.',
  })
  async registrar(@Body() registrarUsuarioDto: RegistrarUsuarioDto) {
    this.logger.log(`POST /autenticacion/registrar - ${registrarUsuarioDto.correoElectronico}`);
    const resultado = await this.autenticacionServicio.registrarUsuario(registrarUsuarioDto);
    return {
      exito: true,
      mensaje: 'Usuario registrado exitosamente.',
      datos: resultado,
      codigoEstado: HttpStatus.CREATED,
    };
  }

  /**
   * POST /api/autenticacion/iniciar-sesion - Iniciar sesión
   */
  @Post('iniciar-sesion')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Iniciar sesión',
    description: 'Autentica un usuario con correo y contraseña, retorna un token JWT.',
  })
  @ApiResponse({
    status: 200,
    description: 'Inicio de sesión exitoso. Retorna token JWT.',
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciales incorrectas.',
  })
  async iniciarSesion(@Body() iniciarSesionDto: IniciarSesionDto) {
    this.logger.log(`POST /autenticacion/iniciar-sesion - ${iniciarSesionDto.correoElectronico}`);
    const resultado = await this.autenticacionServicio.iniciarSesion(iniciarSesionDto);
    return {
      exito: true,
      mensaje: 'Inicio de sesión exitoso.',
      datos: resultado,
      codigoEstado: HttpStatus.OK,
    };
  }
}

import {
  Injectable,
  Inject,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {
  IAutenticacionServicio,
  RespuestaAutenticacion,
  PayloadJwt,
} from '../interfaces/autenticacion.servicio.interfaz';
import { IUsuarioRepositorio } from '../../repositorios/usuario.repositorio.interfaz';
import { RegistrarUsuarioDto } from '../../dtos/registrar-usuario.dto';
import { IniciarSesionDto } from '../../dtos/iniciar-sesion.dto';

/**
 * Implementación concreta del servicio de autenticación.
 * Gestiona registro, login y validación JWT.
 */
@Injectable()
export class AutenticacionServicioImpl implements IAutenticacionServicio {
  private readonly logger = new Logger(AutenticacionServicioImpl.name);

  constructor(
    @Inject('USUARIO_REPOSITORIO')
    private readonly usuarioRepositorio: IUsuarioRepositorio,
    private readonly jwtServicio: JwtService,
  ) {}

  /**
   * Registra un nuevo usuario verificando que el correo no esté en uso.
   * La contraseña se hashea automáticamente por el hook pre-save de Mongoose.
   */
  async registrarUsuario(
    registrarUsuarioDto: RegistrarUsuarioDto,
  ): Promise<RespuestaAutenticacion> {
    this.logger.log(`Registrando usuario: ${registrarUsuarioDto.correoElectronico}`);

    // Verificar que el correo no esté registrado
    const usuarioExistente = await this.usuarioRepositorio.buscarPorCorreo(
      registrarUsuarioDto.correoElectronico,
    );
    if (usuarioExistente) {
      throw new ConflictException(
        'Ya existe una cuenta registrada con este correo electrónico.',
      );
    }

    // Crear usuario (la contraseña se hashea en el hook pre-save)
    const nuevoUsuario = await this.usuarioRepositorio.crear({
      nombre: registrarUsuarioDto.nombre,
      correoElectronico: registrarUsuarioDto.correoElectronico,
      contrasena: registrarUsuarioDto.contrasena,
      rol: registrarUsuarioDto.rol,
    });

    // Generar token JWT
    const payload: PayloadJwt = {
      sub: nuevoUsuario.id,
      correoElectronico: nuevoUsuario.correoElectronico,
      rol: nuevoUsuario.rol,
    };

    this.logger.log(`Usuario registrado exitosamente: ${nuevoUsuario.id}`);

    return {
      tokenAcceso: this.jwtServicio.sign(payload),
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        correoElectronico: nuevoUsuario.correoElectronico,
        rol: nuevoUsuario.rol,
      },
    };
  }

  /**
   * Autentica un usuario verificando sus credenciales contra la base de datos.
   * Compara la contraseña en texto plano con el hash almacenado usando bcrypt.
   */
  async iniciarSesion(
    iniciarSesionDto: IniciarSesionDto,
  ): Promise<RespuestaAutenticacion> {
    this.logger.log(`Intento de inicio de sesión: ${iniciarSesionDto.correoElectronico}`);

    // Buscar usuario por correo
    const usuario = await this.usuarioRepositorio.buscarPorCorreo(
      iniciarSesionDto.correoElectronico,
    );

    if (!usuario) {
      this.logger.warn(`Inicio de sesión fallido: usuario no encontrado - ${iniciarSesionDto.correoElectronico}`);
      throw new UnauthorizedException(
        'Las credenciales proporcionadas son incorrectas. Verifique su correo y contraseña.',
      );
    }

    // Comparar contraseña
    const contrasenaValida = await bcrypt.compare(
      iniciarSesionDto.contrasena,
      usuario.contrasena,
    );

    if (!contrasenaValida) {
      this.logger.warn(`Inicio de sesión fallido: contraseña incorrecta - ${iniciarSesionDto.correoElectronico}`);
      throw new UnauthorizedException(
        'Las credenciales proporcionadas son incorrectas. Verifique su correo y contraseña.',
      );
    }

    // Generar token JWT
    const payload: PayloadJwt = {
      sub: usuario.id,
      correoElectronico: usuario.correoElectronico,
      rol: usuario.rol,
    };

    this.logger.log(`Inicio de sesión exitoso: ${usuario.id}`);

    return {
      tokenAcceso: this.jwtServicio.sign(payload),
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correoElectronico: usuario.correoElectronico,
        rol: usuario.rol,
      },
    };
  }

  /**
   * Valida un usuario a partir del payload JWT decodificado.
   * Usado internamente por la estrategia Passport JWT.
   */
  async validarUsuarioPorJwt(payload: PayloadJwt): Promise<any> {
    const usuario = await this.usuarioRepositorio.buscarPorId(payload.sub);
    if (!usuario) {
      throw new UnauthorizedException('Token inválido o usuario no encontrado.');
    }
    return {
      id: usuario.id,
      correoElectronico: usuario.correoElectronico,
      nombre: usuario.nombre,
      rol: usuario.rol,
    };
  }
}

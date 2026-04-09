import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadJwt } from '../servicios/interfaces/autenticacion.servicio.interfaz';

/**
 * Estrategia JWT para Passport.
 * Extrae y valida el token JWT del header Authorization.
 */
@Injectable()
export class JwtEstrategia extends PassportStrategy(Strategy) {
  constructor(private readonly configServicio: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configServicio.get<string>('JWT_SECRETO'),
    });
  }

  /**
   * Valida el payload del token JWT.
   * El resultado se adjunta a request.user automáticamente.
   */
  async validate(payload: PayloadJwt) {
    return {
      id: payload.sub,
      correoElectronico: payload.correoElectronico,
      rol: payload.rol,
    };
  }
}

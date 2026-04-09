import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guardia de autenticación JWT.
 * Protege endpoints requiriendo un token JWT válido en el header Authorization.
 * Usa la estrategia 'jwt' registrada por JwtEstrategia.
 */
@Injectable()
export class JwtAuthGuardia extends AuthGuard('jwt') {}

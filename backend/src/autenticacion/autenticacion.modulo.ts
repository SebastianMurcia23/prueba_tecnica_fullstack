import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Usuario, UsuarioEsquema } from './entidades/usuario.entidad';
import { UsuarioRepositorio } from './repositorios/usuario.repositorio';
import { AutenticacionServicioImpl } from './servicios/impl/autenticacion.servicio.impl';
import { AutenticacionControlador } from './controladores/autenticacion.controlador';
import { JwtEstrategia } from './estrategias/jwt.estrategia';
import { JwtAuthGuardia } from './guardias/jwt-auth.guardia';

/**
 * Módulo de Autenticación.
 * Configura JWT, Passport y la inyección de dependencias para autenticación.
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Usuario.name, schema: UsuarioEsquema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configServicio: ConfigService) => ({
        secret: configServicio.get<string>('JWT_SECRETO'),
        signOptions: {
          expiresIn: configServicio.get<string>('JWT_EXPIRACION', '24h'),
        },
      }),
    }),
  ],
  controllers: [AutenticacionControlador],
  providers: [
    // Vincular interfaz IUsuarioRepositorio con implementación concreta
    {
      provide: 'USUARIO_REPOSITORIO',
      useClass: UsuarioRepositorio,
    },
    // Vincular interfaz IAutenticacionServicio con implementación concreta
    {
      provide: 'AUTENTICACION_SERVICIO',
      useClass: AutenticacionServicioImpl,
    },
    // Estrategia y guardia JWT
    JwtEstrategia,
    JwtAuthGuardia,
  ],
  exports: ['AUTENTICACION_SERVICIO', JwtAuthGuardia, JwtEstrategia],
})
export class AutenticacionModulo {}

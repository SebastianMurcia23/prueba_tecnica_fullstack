import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ProductosModulo } from './productos/productos.modulo';
import { AutenticacionModulo } from './autenticacion/autenticacion.modulo';
import { FiltroExcepcionesHttp } from './comun/filtros/excepcion-http.filtro';
import { RegistroInterceptor } from './comun/interceptores/registro.interceptor';

/**
 * Módulo raíz de la aplicación.
 * Configura la conexión a MongoDB, módulos de dominio y proveedores globales.
 */
@Module({
  imports: [
    // Configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Conexión a MongoDB usando la URI del archivo .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configServicio: ConfigService) => ({
        uri: configServicio.get<string>('MONGODB_URI'),
      }),
    }),

    // Módulos de dominio
    ProductosModulo,
    AutenticacionModulo,
  ],
  providers: [
    // Filtro global de excepciones - respuestas estandarizadas
    {
      provide: APP_FILTER,
      useClass: FiltroExcepcionesHttp,
    },
    // Interceptor global de logging
    {
      provide: APP_INTERCEPTOR,
      useClass: RegistroInterceptor,
    },
  ],
})
export class AppModulo {}

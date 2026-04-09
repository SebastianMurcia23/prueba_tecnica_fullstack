import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModulo } from './app.modulo';

/**
 * Punto de entrada principal de la aplicación.
 * Configura: Swagger, ValidationPipe global, CORS y puerto del servidor.
 */
async function iniciarAplicacion() {
  const logger = new Logger('IniciarAplicacion');
  const app = await NestFactory.create(AppModulo);
  const configServicio = app.get(ConfigService);

  // Prefijo global para todas las rutas
  const prefijoApi = configServicio.get<string>('PREFIJO_API', 'api');
  app.setGlobalPrefix(prefijoApi);

  // Pipe de validación global con class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // Elimina propiedades no declaradas en el DTO
      forbidNonWhitelisted: true,  // Lanza error si se envían propiedades no permitidas
      transform: true,             // Transforma automáticamente los tipos
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Configuración de CORS
  const corsOrigen = configServicio.get<string>('CORS_ORIGEN', 'http://localhost:4200');
  app.enableCors({
    origin: corsOrigen,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Configuración de Swagger / OpenAPI
  const configuracionSwagger = new DocumentBuilder()
    .setTitle('API Gestión de Productos')
    .setDescription(
      'API REST profesional para la gestión completa de productos del sector agropecuario. ' +
      'Implementada con NestJS, MongoDB y autenticación JWT.',
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingrese su token JWT',
        in: 'header',
      },
      'JWT-auth',
    )
    .addTag('Autenticación', 'Endpoints de registro e inicio de sesión')
    .addTag('Productos', 'CRUD completo de productos')
    .build();

  const documentoSwagger = SwaggerModule.createDocument(app, configuracionSwagger);
  SwaggerModule.setup(`${prefijoApi}/documentacion`, app, documentoSwagger, {
    customSiteTitle: 'API Gestión de Productos - Documentación',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  // Iniciar servidor
  const puerto = configServicio.get<number>('PUERTO', 3000);
  await app.listen(puerto);

  logger.log(`🚀 Aplicación ejecutándose en: http://localhost:${puerto}/${prefijoApi}`);
  logger.log(`📚 Documentación Swagger: http://localhost:${puerto}/${prefijoApi}/documentacion`);
  logger.log(`🗄️  Base de datos: ${configServicio.get<string>('MONGODB_URI')}`);
}

iniciarAplicacion();

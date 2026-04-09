"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const app_modulo_1 = require("./app.modulo");
async function iniciarAplicacion() {
    const logger = new common_1.Logger('IniciarAplicacion');
    const app = await core_1.NestFactory.create(app_modulo_1.AppModulo);
    const configServicio = app.get(config_1.ConfigService);
    const prefijoApi = configServicio.get('PREFIJO_API', 'api');
    app.setGlobalPrefix(prefijoApi);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const corsOrigen = configServicio.get('CORS_ORIGEN', 'http://localhost:4200');
    app.enableCors({
        origin: corsOrigen,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const configuracionSwagger = new swagger_1.DocumentBuilder()
        .setTitle('API Gestión de Productos')
        .setDescription('API REST profesional para la gestión completa de productos del sector agropecuario. ' +
        'Implementada con NestJS, MongoDB y autenticación JWT.')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Ingrese su token JWT',
        in: 'header',
    }, 'JWT-auth')
        .addTag('Autenticación', 'Endpoints de registro e inicio de sesión')
        .addTag('Productos', 'CRUD completo de productos')
        .build();
    const documentoSwagger = swagger_1.SwaggerModule.createDocument(app, configuracionSwagger);
    swagger_1.SwaggerModule.setup(`${prefijoApi}/documentacion`, app, documentoSwagger, {
        customSiteTitle: 'API Gestión de Productos - Documentación',
        customCss: '.swagger-ui .topbar { display: none }',
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    const puerto = configServicio.get('PUERTO', 3000);
    await app.listen(puerto);
    logger.log(`🚀 Aplicación ejecutándose en: http://localhost:${puerto}/${prefijoApi}`);
    logger.log(`📚 Documentación Swagger: http://localhost:${puerto}/${prefijoApi}/documentacion`);
    logger.log(`🗄️  Base de datos: ${configServicio.get('MONGODB_URI')}`);
}
iniciarAplicacion();
//# sourceMappingURL=main.js.map
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response, Request } from 'express';

/**
 * Interfaz para errores de validación de Mongoose.
 */
interface ErrorMongoose {
  code?: number;
  keyValue?: Record<string, any>;
  errors?: Record<string, { message: string }>;
}

/**
 * Filtro global de excepciones HTTP.
 * Centraliza el manejo de errores para garantizar respuestas uniformes.
 * Maneja errores de NestJS, Mongoose y errores inesperados.
 */
@Catch()
export class FiltroExcepcionesHttp implements ExceptionFilter {
  private readonly logger = new Logger(FiltroExcepcionesHttp.name);

  catch(excepcion: unknown, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const respuesta = contexto.getResponse<Response>();
    const solicitud = contexto.getRequest<Request>();

    let codigoEstado = HttpStatus.INTERNAL_SERVER_ERROR;
    let mensaje = 'Ha ocurrido un error interno en el servidor.';
    let errores: any = null;

    // Errores HTTP de NestJS (incluye errores de class-validator)
    if (excepcion instanceof HttpException) {
      codigoEstado = excepcion.getStatus();
      const respuestaExcepcion = excepcion.getResponse();

      if (typeof respuestaExcepcion === 'string') {
        mensaje = respuestaExcepcion;
      } else if (typeof respuestaExcepcion === 'object') {
        const obj = respuestaExcepcion as any;
        mensaje = obj.message || excepcion.message;
        // Manejar array de mensajes de validación de class-validator
        if (Array.isArray(obj.message)) {
          mensaje = 'Error de validación en los datos enviados.';
          errores = obj.message;
        }
      }
    }
    // Error de clave duplicada de MongoDB (código 11000)
    else if ((excepcion as ErrorMongoose)?.code === 11000) {
      codigoEstado = HttpStatus.CONFLICT;
      const clavesDuplicadas = (excepcion as ErrorMongoose).keyValue;
      const campos = Object.keys(clavesDuplicadas || {}).join(', ');
      mensaje = `Ya existe un registro con el mismo valor en: ${campos}.`;
    }
    // Errores de validación de Mongoose
    else if ((excepcion as any)?.name === 'ValidationError') {
      codigoEstado = HttpStatus.BAD_REQUEST;
      const erroresMongoose = (excepcion as ErrorMongoose).errors || {};
      const mensajesError = Object.values(erroresMongoose).map((e) => e.message);
      mensaje = 'Error de validación en los datos.';
      errores = mensajesError;
    }
    // Error de ObjectId inválido de Mongoose
    else if ((excepcion as any)?.name === 'CastError') {
      codigoEstado = HttpStatus.BAD_REQUEST;
      mensaje = 'El identificador proporcionado no tiene un formato válido.';
    }
    // Error genérico
    else if (excepcion instanceof Error) {
      mensaje = excepcion.message || mensaje;
    }

    // Logging del error
    this.logger.error(
      `[${solicitud.method}] ${solicitud.url} - ${codigoEstado}: ${mensaje}`,
      excepcion instanceof Error ? excepcion.stack : '',
    );

    // Respuesta estandarizada
    respuesta.status(codigoEstado).json({
      exito: false,
      mensaje,
      errores,
      codigoEstado,
      timestamp: new Date().toISOString(),
      ruta: solicitud.url,
    });
  }
}

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

/**
 * Interceptor de registro (logging) profesional.
 * Registra cada solicitud HTTP con información relevante:
 * - Método HTTP, URL, IP del cliente
 * - Tiempo de respuesta en milisegundos
 * - Código de estado de la respuesta
 */
@Injectable()
export class RegistroInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(contexto: ExecutionContext, siguiente: CallHandler): Observable<any> {
    const solicitud = contexto.switchToHttp().getRequest();
    const { method, url, ip } = solicitud;
    const agenteUsuario = solicitud.get('user-agent') || '';
    const tiempoInicio = Date.now();

    this.logger.log(
      `➡️  [${method}] ${url} - IP: ${ip} - Agent: ${agenteUsuario.substring(0, 50)}`,
    );

    return siguiente.handle().pipe(
      tap({
        next: () => {
          const respuesta = contexto.switchToHttp().getResponse();
          const tiempoRespuesta = Date.now() - tiempoInicio;
          this.logger.log(
            `⬅️  [${method}] ${url} - ${respuesta.statusCode} - ${tiempoRespuesta}ms`,
          );
        },
        error: (error) => {
          const tiempoRespuesta = Date.now() - tiempoInicio;
          this.logger.error(
            `❌ [${method}] ${url} - ${error.status || 500} - ${tiempoRespuesta}ms - ${error.message}`,
          );
        },
      }),
    );
  }
}

import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class RegistroInterceptor implements NestInterceptor {
    private readonly logger;
    intercept(contexto: ExecutionContext, siguiente: CallHandler): Observable<any>;
}

import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class FiltroExcepcionesHttp implements ExceptionFilter {
    private readonly logger;
    catch(excepcion: unknown, host: ArgumentsHost): void;
}

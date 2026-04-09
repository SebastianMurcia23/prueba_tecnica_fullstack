import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PayloadJwt } from '../servicios/interfaces/autenticacion.servicio.interfaz';
declare const JwtEstrategia_base: new (...args: any[]) => Strategy;
export declare class JwtEstrategia extends JwtEstrategia_base {
    private readonly configServicio;
    constructor(configServicio: ConfigService);
    validate(payload: PayloadJwt): Promise<{
        id: string;
        correoElectronico: string;
        rol: string;
    }>;
}
export {};

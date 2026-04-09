import { Document } from 'mongoose';
export declare enum RolUsuario {
    ADMINISTRADOR = "administrador",
    USUARIO = "usuario"
}
export type UsuarioDocumento = Usuario & Document;
export declare class Usuario {
    nombre: string;
    correoElectronico: string;
    contrasena: string;
    rol: RolUsuario;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
}
export declare const UsuarioEsquema: import("mongoose").Schema<Usuario, import("mongoose").Model<Usuario, any, any, any, Document<unknown, any, Usuario, any, {}> & Usuario & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuario, Document<unknown, {}, import("mongoose").FlatRecord<Usuario>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Usuario> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

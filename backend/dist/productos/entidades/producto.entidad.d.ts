import { Document } from 'mongoose';
export declare enum CategoriaProducto {
    SEMILLAS = "semillas",
    FERTILIZANTES = "fertilizantes",
    HERRAMIENTAS = "herramientas",
    MAQUINARIA = "maquinaria",
    ALIMENTOS_ANIMALES = "alimentos_animales",
    PRODUCTOS_VETERINARIOS = "productos_veterinarios",
    RIEGO = "riego",
    OTROS = "otros"
}
export declare enum EstadoProducto {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
    AGOTADO = "agotado"
}
export type ProductoDocumento = Producto & Document;
export declare class Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    categoria: CategoriaProducto;
    sku: string;
    estado: EstadoProducto;
    imagenUrl: string;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
}
export declare const ProductoEsquema: import("mongoose").Schema<Producto, import("mongoose").Model<Producto, any, any, any, Document<unknown, any, Producto, any, {}> & Producto & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Producto, Document<unknown, {}, import("mongoose").FlatRecord<Producto>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Producto> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

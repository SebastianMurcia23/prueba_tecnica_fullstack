import { CategoriaProducto, EstadoProducto } from '../entidades/producto.entidad';
export declare class CrearProductoDto {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    categoria: CategoriaProducto;
    sku: string;
    estado?: EstadoProducto;
    imagenUrl?: string;
}

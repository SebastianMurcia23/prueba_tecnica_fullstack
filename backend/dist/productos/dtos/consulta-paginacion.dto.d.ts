import { CategoriaProducto, EstadoProducto } from '../entidades/producto.entidad';
export declare class ConsultaPaginacionDto {
    pagina?: number;
    limite?: number;
    categoria?: CategoriaProducto;
    estado?: EstadoProducto;
    busqueda?: string;
    precioMinimo?: number;
    precioMaximo?: number;
}

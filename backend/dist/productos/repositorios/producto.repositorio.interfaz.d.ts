import { Producto, ProductoDocumento } from '../entidades/producto.entidad';
export interface ResultadoPaginado<T> {
    datos: T[];
    total: number;
    pagina: number;
    limite: number;
    totalPaginas: number;
}
export interface IProductoRepositorio {
    crear(datosProducto: Partial<Producto>): Promise<ProductoDocumento>;
    buscarPorId(id: string): Promise<ProductoDocumento | null>;
    buscarPorSku(sku: string): Promise<ProductoDocumento | null>;
    buscarTodosPaginado(pagina: number, limite: number, filtros?: Record<string, any>): Promise<ResultadoPaginado<ProductoDocumento>>;
    actualizar(id: string, datosActualizacion: Partial<Producto>): Promise<ProductoDocumento | null>;
    eliminar(id: string): Promise<boolean>;
    contar(filtros?: Record<string, any>): Promise<number>;
}

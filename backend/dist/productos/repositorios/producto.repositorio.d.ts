import { Model } from 'mongoose';
import { Producto, ProductoDocumento } from '../entidades/producto.entidad';
import { IProductoRepositorio, ResultadoPaginado } from './producto.repositorio.interfaz';
export declare class ProductoRepositorio implements IProductoRepositorio {
    private readonly productoModelo;
    constructor(productoModelo: Model<ProductoDocumento>);
    crear(datosProducto: Partial<Producto>): Promise<ProductoDocumento>;
    buscarPorId(id: string): Promise<ProductoDocumento | null>;
    buscarPorSku(sku: string): Promise<ProductoDocumento | null>;
    buscarTodosPaginado(pagina: number, limite: number, filtros?: Record<string, any>): Promise<ResultadoPaginado<ProductoDocumento>>;
    actualizar(id: string, datosActualizacion: Partial<Producto>): Promise<ProductoDocumento | null>;
    eliminar(id: string): Promise<boolean>;
    contar(filtros?: Record<string, any>): Promise<number>;
    private construirFiltros;
}

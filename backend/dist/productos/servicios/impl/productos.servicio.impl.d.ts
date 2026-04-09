import { IProductosServicio } from '../interfaces/productos.servicio.interfaz';
import { IProductoRepositorio, ResultadoPaginado } from '../../repositorios/producto.repositorio.interfaz';
import { CrearProductoDto } from '../../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../../dtos/consulta-paginacion.dto';
import { ProductoDocumento } from '../../entidades/producto.entidad';
export declare class ProductosServicioImpl implements IProductosServicio {
    private readonly productoRepositorio;
    private readonly logger;
    constructor(productoRepositorio: IProductoRepositorio);
    crearProducto(crearProductoDto: CrearProductoDto): Promise<ProductoDocumento>;
    obtenerProductoPorId(id: string): Promise<ProductoDocumento>;
    obtenerProductosPaginados(consulta: ConsultaPaginacionDto): Promise<ResultadoPaginado<ProductoDocumento>>;
    actualizarProducto(id: string, actualizarProductoDto: ActualizarProductoDto): Promise<ProductoDocumento>;
    eliminarProducto(id: string): Promise<void>;
}

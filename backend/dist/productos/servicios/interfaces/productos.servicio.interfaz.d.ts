import { CrearProductoDto } from '../../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../../dtos/consulta-paginacion.dto';
import { ProductoDocumento } from '../../entidades/producto.entidad';
import { ResultadoPaginado } from '../../repositorios/producto.repositorio.interfaz';
export interface IProductosServicio {
    crearProducto(crearProductoDto: CrearProductoDto): Promise<ProductoDocumento>;
    obtenerProductoPorId(id: string): Promise<ProductoDocumento>;
    obtenerProductosPaginados(consulta: ConsultaPaginacionDto): Promise<ResultadoPaginado<ProductoDocumento>>;
    actualizarProducto(id: string, actualizarProductoDto: ActualizarProductoDto): Promise<ProductoDocumento>;
    eliminarProducto(id: string): Promise<void>;
}

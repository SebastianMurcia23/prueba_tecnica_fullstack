import { HttpStatus } from '@nestjs/common';
import { IProductosServicio } from '../servicios/interfaces/productos.servicio.interfaz';
import { CrearProductoDto } from '../dtos/crear-producto.dto';
import { ActualizarProductoDto } from '../dtos/actualizar-producto.dto';
import { ConsultaPaginacionDto } from '../dtos/consulta-paginacion.dto';
export declare class ProductosControlador {
    private readonly productosServicio;
    private readonly logger;
    constructor(productosServicio: IProductosServicio);
    crearProducto(crearProductoDto: CrearProductoDto): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../entidades/producto.entidad").ProductoDocumento;
        codigoEstado: HttpStatus;
    }>;
    obtenerProductos(consulta: ConsultaPaginacionDto): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../repositorios/producto.repositorio.interfaz").ResultadoPaginado<import("../entidades/producto.entidad").ProductoDocumento>;
        codigoEstado: HttpStatus;
    }>;
    obtenerProductoPorId(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../entidades/producto.entidad").ProductoDocumento;
        codigoEstado: HttpStatus;
    }>;
    actualizarProducto(id: string, actualizarProductoDto: ActualizarProductoDto): Promise<{
        exito: boolean;
        mensaje: string;
        datos: import("../entidades/producto.entidad").ProductoDocumento;
        codigoEstado: HttpStatus;
    }>;
    eliminarProducto(id: string): Promise<{
        exito: boolean;
        mensaje: string;
        datos: null;
        codigoEstado: HttpStatus;
    }>;
}

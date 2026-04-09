import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocumento } from '../entidades/producto.entidad';
import {
  IProductoRepositorio,
  ResultadoPaginado,
} from './producto.repositorio.interfaz';

/**
 * Implementación concreta del repositorio de productos usando Mongoose.
 * Encapsula toda la lógica de persistencia y acceso a datos.
 */
@Injectable()
export class ProductoRepositorio implements IProductoRepositorio {
  constructor(
    @InjectModel(Producto.name)
    private readonly productoModelo: Model<ProductoDocumento>,
  ) {}

  /** @inheritdoc */
  async crear(datosProducto: Partial<Producto>): Promise<ProductoDocumento> {
    const nuevoProducto = new this.productoModelo(datosProducto);
    return nuevoProducto.save();
  }

  /** @inheritdoc */
  async buscarPorId(id: string): Promise<ProductoDocumento | null> {
    return this.productoModelo.findById(id).exec();
  }

  /** @inheritdoc */
  async buscarPorSku(sku: string): Promise<ProductoDocumento | null> {
    return this.productoModelo.findOne({ sku: sku.toUpperCase() }).exec();
  }

  /** @inheritdoc */
  async buscarTodosPaginado(
    pagina: number,
    limite: number,
    filtros: Record<string, any> = {},
  ): Promise<ResultadoPaginado<ProductoDocumento>> {
    const consultaFiltros = this.construirFiltros(filtros);
    const salto = (pagina - 1) * limite;

    const [datos, total] = await Promise.all([
      this.productoModelo
        .find(consultaFiltros)
        .sort({ fechaCreacion: -1 })
        .skip(salto)
        .limit(limite)
        .exec(),
      this.productoModelo.countDocuments(consultaFiltros).exec(),
    ]);

    return {
      datos,
      total,
      pagina,
      limite,
      totalPaginas: Math.ceil(total / limite),
    };
  }

  /** @inheritdoc */
  async actualizar(
    id: string,
    datosActualizacion: Partial<Producto>,
  ): Promise<ProductoDocumento | null> {
    return this.productoModelo
      .findByIdAndUpdate(id, datosActualizacion, { new: true, runValidators: true })
      .exec();
  }

  /** @inheritdoc */
  async eliminar(id: string): Promise<boolean> {
    const resultado = await this.productoModelo.findByIdAndDelete(id).exec();
    return resultado !== null;
  }

  /** @inheritdoc */
  async contar(filtros: Record<string, any> = {}): Promise<number> {
    const consultaFiltros = this.construirFiltros(filtros);
    return this.productoModelo.countDocuments(consultaFiltros).exec();
  }

  /**
   * Construye un objeto de filtros compatible con Mongoose
   * a partir de los parámetros de consulta recibidos.
   * @param filtros - Objeto con filtros crudos
   * @returns Objeto de consulta Mongoose
   */
  private construirFiltros(filtros: Record<string, any>): Record<string, any> {
    const consultaMongo: Record<string, any> = {};

    if (filtros.categoria) {
      consultaMongo.categoria = filtros.categoria;
    }

    if (filtros.estado) {
      consultaMongo.estado = filtros.estado;
    }

    if (filtros.busqueda) {
      consultaMongo.$or = [
        { nombre: { $regex: filtros.busqueda, $options: 'i' } },
        { descripcion: { $regex: filtros.busqueda, $options: 'i' } },
        { sku: { $regex: filtros.busqueda, $options: 'i' } },
      ];
    }

    if (filtros.precioMinimo !== undefined || filtros.precioMaximo !== undefined) {
      consultaMongo.precio = {};
      if (filtros.precioMinimo !== undefined) {
        consultaMongo.precio.$gte = filtros.precioMinimo;
      }
      if (filtros.precioMaximo !== undefined) {
        consultaMongo.precio.$lte = filtros.precioMaximo;
      }
    }

    return consultaMongo;
  }
}

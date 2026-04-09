import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoEsquema } from './entidades/producto.entidad';
import { ProductoRepositorio } from './repositorios/producto.repositorio';
import { ProductosServicioImpl } from './servicios/impl/productos.servicio.impl';
import { ProductosControlador } from './controladores/productos.controlador';

/**
 * Módulo de Productos.
 * Configura la inyección de dependencias para todo el dominio de productos.
 * Vincula interfaces con implementaciones concretas usando Custom Providers.
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoEsquema },
    ]),
  ],
  controllers: [ProductosControlador],
  providers: [
    // Vincular la interfaz IProductoRepositorio con su implementación concreta
    {
      provide: 'PRODUCTO_REPOSITORIO',
      useClass: ProductoRepositorio,
    },
    // Vincular la interfaz IProductosServicio con su implementación concreta
    {
      provide: 'PRODUCTOS_SERVICIO',
      useClass: ProductosServicioImpl,
    },
  ],
  exports: ['PRODUCTOS_SERVICIO'],
})
export class ProductosModulo {}

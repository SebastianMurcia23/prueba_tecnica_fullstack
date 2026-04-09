import { Producto, ProductoDocumento } from '../entidades/producto.entidad';

/**
 * Interfaz de resultado paginado para consultas de productos.
 */
export interface ResultadoPaginado<T> {
  datos: T[];
  total: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
}

/**
 * Interfaz del Repositorio de Productos.
 * Define el contrato de acceso a datos para la entidad Producto.
 * Siguiendo el principio de inversión de dependencias (SOLID - D).
 */
export interface IProductoRepositorio {
  /**
   * Crea un nuevo producto en la base de datos.
   * @param datosProducto - Datos parciales del producto a crear
   * @returns Producto creado con su ID generado
   */
  crear(datosProducto: Partial<Producto>): Promise<ProductoDocumento>;

  /**
   * Busca un producto por su ID único.
   * @param id - Identificador MongoDB del producto
   * @returns Producto encontrado o null si no existe
   */
  buscarPorId(id: string): Promise<ProductoDocumento | null>;

  /**
   * Busca un producto por su código SKU.
   * @param sku - Código SKU único del producto
   * @returns Producto encontrado o null si no existe
   */
  buscarPorSku(sku: string): Promise<ProductoDocumento | null>;

  /**
   * Obtiene una lista paginada de productos con filtros opcionales.
   * @param pagina - Número de página (iniciando en 1)
   * @param limite - Cantidad de registros por página
   * @param filtros - Filtros opcionales (categoría, estado, búsqueda)
   * @returns Resultado paginado con metadatos
   */
  buscarTodosPaginado(
    pagina: number,
    limite: number,
    filtros?: Record<string, any>,
  ): Promise<ResultadoPaginado<ProductoDocumento>>;

  /**
   * Actualiza un producto existente por su ID.
   * @param id - Identificador del producto
   * @param datosActualizacion - Campos a actualizar
   * @returns Producto actualizado o null si no existe
   */
  actualizar(
    id: string,
    datosActualizacion: Partial<Producto>,
  ): Promise<ProductoDocumento | null>;

  /**
   * Elimina un producto por su ID.
   * @param id - Identificador del producto
   * @returns true si se eliminó, false si no se encontró
   */
  eliminar(id: string): Promise<boolean>;

  /**
   * Cuenta el total de productos que coinciden con los filtros.
   * @param filtros - Filtros opcionales
   * @returns Total de documentos
   */
  contar(filtros?: Record<string, any>): Promise<number>;
}

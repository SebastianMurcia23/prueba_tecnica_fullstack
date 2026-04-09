import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ambiente } from '../../ambientes/ambiente';
import { RespuestaApi, ResultadoPaginado, ConsultaPaginada } from '../core/modelos/respuesta-api.modelo';
import { Producto } from '../core/modelos/producto.modelo';

/**
 * Servicio de Productos.
 * Se comunica con la API REST del backend para operaciones CRUD.
 * Utiliza HttpClient con observables para reactividad.
 */
@Injectable({ providedIn: 'root' })
export class ProductosServicio {
  private readonly urlBase = `${ambiente.apiUrl}/productos`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Obtiene productos paginados con filtros opcionales.
   */
  obtenerProductos(consulta: ConsultaPaginada = {}): Observable<RespuestaApi<ResultadoPaginado<Producto>>> {
    const parametros: Record<string, string> = {};

    if (consulta.pagina) parametros['pagina'] = consulta.pagina.toString();
    if (consulta.limite) parametros['limite'] = consulta.limite.toString();
    if (consulta.categoria) parametros['categoria'] = consulta.categoria;
    if (consulta.estado) parametros['estado'] = consulta.estado;
    if (consulta.busqueda) parametros['busqueda'] = consulta.busqueda;

    return this.http.get<RespuestaApi<ResultadoPaginado<Producto>>>(this.urlBase, { params: parametros });
  }

  /**
   * Obtiene un producto por su ID.
   */
  obtenerProductoPorId(id: string): Observable<RespuestaApi<Producto>> {
    return this.http.get<RespuestaApi<Producto>>(`${this.urlBase}/${id}`);
  }

  /**
   * Crea un nuevo producto.
   */
  crearProducto(producto: Partial<Producto>): Observable<RespuestaApi<Producto>> {
    return this.http.post<RespuestaApi<Producto>>(this.urlBase, producto);
  }

  /**
   * Actualiza un producto existente.
   */
  actualizarProducto(id: string, producto: Partial<Producto>): Observable<RespuestaApi<Producto>> {
    return this.http.put<RespuestaApi<Producto>>(`${this.urlBase}/${id}`, producto);
  }

  /**
   * Elimina un producto por su ID.
   */
  eliminarProducto(id: string): Observable<RespuestaApi<null>> {
    return this.http.delete<RespuestaApi<null>>(`${this.urlBase}/${id}`);
  }
}

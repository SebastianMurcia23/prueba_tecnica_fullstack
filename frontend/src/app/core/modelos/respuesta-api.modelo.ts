/**
 * Respuesta estandarizada de la API.
 */
export interface RespuestaApi<T> {
  exito: boolean;
  mensaje: string;
  datos: T;
  codigoEstado: number;
  errores?: string[];
}

/**
 * Resultado paginado del backend.
 */
export interface ResultadoPaginado<T> {
  datos: T[];
  total: number;
  pagina: number;
  limite: number;
  totalPaginas: number;
}

/**
 * Parámetros de consulta paginada.
 */
export interface ConsultaPaginada {
  pagina?: number;
  limite?: number;
  categoria?: string;
  estado?: string;
  busqueda?: string;
  precioMinimo?: number;
  precioMaximo?: number;
}

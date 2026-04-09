import {
  ProductosAcciones,
  Store,
  adaptadorProductos,
  createFeatureSelector,
  createSelector
} from "./chunk-ZQFZ6XOL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-26KWDOZG.js";
import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  EventEmitter,
  Subject,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BK2WVXHI.js";

// src/app/estado/productos/productos.selectores.ts
var seleccionarEstadoProductos = createFeatureSelector("productos");
var { selectAll, selectEntities, selectIds, selectTotal } = adaptadorProductos.getSelectors();
var seleccionarTodosProductos = createSelector(seleccionarEstadoProductos, selectAll);
var seleccionarEntidadesProductos = createSelector(seleccionarEstadoProductos, selectEntities);
var seleccionarIdsProductos = createSelector(seleccionarEstadoProductos, selectIds);
var seleccionarCargando = createSelector(seleccionarEstadoProductos, (estado) => estado.cargando);
var seleccionarError = createSelector(seleccionarEstadoProductos, (estado) => estado.error);
var seleccionarMensajeExito = createSelector(seleccionarEstadoProductos, (estado) => estado.mensajeExito);
var seleccionarTotal = createSelector(seleccionarEstadoProductos, (estado) => estado.total);
var seleccionarPagina = createSelector(seleccionarEstadoProductos, (estado) => estado.pagina);
var seleccionarLimite = createSelector(seleccionarEstadoProductos, (estado) => estado.limite);
var seleccionarTotalPaginas = createSelector(seleccionarEstadoProductos, (estado) => estado.totalPaginas);
var seleccionarProductoSeleccionadoId = createSelector(seleccionarEstadoProductos, (estado) => estado.productoSeleccionadoId);
var seleccionarProductoSeleccionado = createSelector(seleccionarEntidadesProductos, seleccionarProductoSeleccionadoId, (entidades, id) => id ? entidades[id] || null : null);
var seleccionarInfoPaginacion = createSelector(seleccionarEstadoProductos, (estado) => ({
  pagina: estado.pagina,
  limite: estado.limite,
  total: estado.total,
  totalPaginas: estado.totalPaginas
}));

// src/app/core/modelos/producto.modelo.ts
var CategoriaProducto;
(function(CategoriaProducto2) {
  CategoriaProducto2["SEMILLAS"] = "semillas";
  CategoriaProducto2["FERTILIZANTES"] = "fertilizantes";
  CategoriaProducto2["HERRAMIENTAS"] = "herramientas";
  CategoriaProducto2["MAQUINARIA"] = "maquinaria";
  CategoriaProducto2["ALIMENTOS_ANIMALES"] = "alimentos_animales";
  CategoriaProducto2["PRODUCTOS_VETERINARIOS"] = "productos_veterinarios";
  CategoriaProducto2["RIEGO"] = "riego";
  CategoriaProducto2["OTROS"] = "otros";
})(CategoriaProducto || (CategoriaProducto = {}));
var EstadoProducto;
(function(EstadoProducto2) {
  EstadoProducto2["ACTIVO"] = "activo";
  EstadoProducto2["INACTIVO"] = "inactivo";
  EstadoProducto2["AGOTADO"] = "agotado";
})(EstadoProducto || (EstadoProducto = {}));
var ETIQUETAS_CATEGORIA = {
  [CategoriaProducto.SEMILLAS]: "Semillas",
  [CategoriaProducto.FERTILIZANTES]: "Fertilizantes",
  [CategoriaProducto.HERRAMIENTAS]: "Herramientas",
  [CategoriaProducto.MAQUINARIA]: "Maquinaria",
  [CategoriaProducto.ALIMENTOS_ANIMALES]: "Alimentos para Animales",
  [CategoriaProducto.PRODUCTOS_VETERINARIOS]: "Productos Veterinarios",
  [CategoriaProducto.RIEGO]: "Riego",
  [CategoriaProducto.OTROS]: "Otros"
};
var ETIQUETAS_ESTADO = {
  [EstadoProducto.ACTIVO]: "Activo",
  [EstadoProducto.INACTIVO]: "Inactivo",
  [EstadoProducto.AGOTADO]: "Agotado"
};

// src/app/shared/componentes/skeleton-carga/skeleton-carga.component.ts
var _c0 = () => [1, 2, 3, 4];
function SkeletonCargaComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function SkeletonCargaComponent_Conditional_1_For_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("max-width", ctx_r0.aleatorio(50, 90), "%");
  }
}
function SkeletonCargaComponent_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, SkeletonCargaComponent_Conditional_1_For_5_For_2_Template, 1, 2, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.columnas);
  }
}
function SkeletonCargaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4);
    \u0275\u0275repeaterCreate(2, SkeletonCargaComponent_Conditional_1_For_3_Template, 1, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SkeletonCargaComponent_Conditional_1_For_5_Template, 3, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.columnas);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filas);
  }
}
function SkeletonCargaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275element(5, "div", 12)(6, "div", 12);
    \u0275\u0275elementEnd()();
  }
}
function SkeletonCargaComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 15)(2, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function SkeletonCargaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, SkeletonCargaComponent_Conditional_3_For_2_Template, 3, 0, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275element(4, "div", 12)(5, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
var SkeletonCargaComponent = class _SkeletonCargaComponent {
  constructor() {
    this.tipo = "tabla";
    this.filas = [1, 2, 3, 4, 5];
    this.columnas = [1, 2, 3, 4, 5];
  }
  aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static {
    this.\u0275fac = function SkeletonCargaComponent_Factory(t) {
      return new (t || _SkeletonCargaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonCargaComponent, selectors: [["app-skeleton-carga"]], inputs: { tipo: "tipo", filas: "filas", columnas: "columnas" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "space-y-4", "animate-pulse"], [1, "tarjeta", "overflow-hidden"], [1, "tarjeta"], [1, "space-y-6"], [1, "flex", "gap-4", "p-4", "border-b", "border-superficie-800"], [1, "skeleton", "h-4", "flex-1", "rounded"], [1, "flex", "gap-4", "p-4", "border-b", "border-superficie-800/50"], [1, "skeleton", "h-4", "flex-1", "rounded", 3, "max-width"], [1, "skeleton", "h-6", "w-3/4", "rounded", "mb-4"], [1, "skeleton", "h-4", "w-full", "rounded", "mb-2"], [1, "skeleton", "h-4", "w-5/6", "rounded", "mb-4"], [1, "flex", "gap-3"], [1, "skeleton", "h-10", "w-24", "rounded-xl"], [1, "flex", "gap-3", "justify-end"], [1, "skeleton", "h-10", "w-32", "rounded-xl"], [1, "skeleton", "h-4", "w-1/4", "rounded", "mb-2"], [1, "skeleton", "h-10", "w-full", "rounded-xl"]], template: function SkeletonCargaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SkeletonCargaComponent_Conditional_1_Template, 6, 0, "div", 1)(2, SkeletonCargaComponent_Conditional_2_Template, 7, 0, "div", 2)(3, SkeletonCargaComponent_Conditional_3_Template, 6, 1, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.tipo === "tabla" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(2, ctx.tipo === "tarjeta" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(3, ctx.tipo === "formulario" ? 3 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonCargaComponent, { className: "SkeletonCargaComponent", filePath: "src\\app\\shared\\componentes\\skeleton-carga\\skeleton-carga.component.ts", lineNumber: 66 });
})();

// src/app/shared/componentes/confirmar-eliminacion/confirmar-eliminacion.component.ts
function ConfirmarEliminacionComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "circle", 15)(2, "path", 16);
    \u0275\u0275elementEnd();
  }
}
function ConfirmarEliminacionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmarEliminacionComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarPorOverlay($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6)(6, "line", 7)(7, "line", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
    \u0275\u0275listener("click", function ConfirmarEliminacionComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alCancelar.emit());
    });
    \u0275\u0275text(14, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function ConfirmarEliminacionComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alConfirmar.emit());
    });
    \u0275\u0275template(16, ConfirmarEliminacionComponent_Conditional_0_Conditional_16_Template, 3, 0, ":svg:svg", 14);
    \u0275\u0275text(17, " Eliminar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mensaje);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r1.cargando ? 16 : -1);
  }
}
var ConfirmarEliminacionComponent = class _ConfirmarEliminacionComponent {
  constructor() {
    this.abierto = false;
    this.titulo = "\xBFConfirmar eliminaci\xF3n?";
    this.mensaje = "Esta acci\xF3n no se puede deshacer. \xBFEst\xE1 seguro de que desea continuar?";
    this.cargando = false;
    this.alConfirmar = new EventEmitter();
    this.alCancelar = new EventEmitter();
  }
  cerrarPorOverlay(evento) {
    if (evento.target.classList.contains("overlay-modal")) {
      this.alCancelar.emit();
    }
  }
  static {
    this.\u0275fac = function ConfirmarEliminacionComponent_Factory(t) {
      return new (t || _ConfirmarEliminacionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmarEliminacionComponent, selectors: [["app-confirmar-eliminacion"]], inputs: { abierto: "abierto", titulo: "titulo", mensaje: "mensaje", cargando: "cargando" }, outputs: { alConfirmar: "alConfirmar", alCancelar: "alCancelar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "overlay-modal"], [1, "overlay-modal", 3, "click"], [1, "bg-superficie-900", "border", "border-superficie-800", "rounded-2xl", "shadow-modal", "w-full", "max-w-md", "mx-4", "animate-aparecer"], [1, "p-6", "text-center"], [1, "mx-auto", "w-14", "h-14", "rounded-full", "bg-peligro-500/10", "flex", "items-center", "justify-center", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-7", "h-7", "text-peligro-400"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "text-lg", "font-semibold", "text-superficie-100", "mb-2"], [1, "text-sm", "text-superficie-400", "mb-6"], [1, "flex", "gap-3", "justify-center"], [1, "btn-secundario", 3, "click"], [1, "btn-peligro", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function ConfirmarEliminacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmarEliminacionComponent_Conditional_0_Template, 18, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.abierto ? 0 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmarEliminacionComponent, { className: "ConfirmarEliminacionComponent", filePath: "src\\app\\shared\\componentes\\confirmar-eliminacion\\confirmar-eliminacion.component.ts", lineNumber: 53 });
})();

// src/app/shared/componentes/modal/modal.component.ts
var _c02 = ["*"];
function ModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ModalComponent_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrarPorOverlay($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "h2", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ModalComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.alCerrar.emit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275projection(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("max-w-xl", ctx_r1.tamano === "grande")("max-w-md", ctx_r1.tamano === "pequeno");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.titulo);
  }
}
var ModalComponent = class _ModalComponent {
  constructor() {
    this.abierto = false;
    this.titulo = "";
    this.tamano = "normal";
    this.alCerrar = new EventEmitter();
  }
  cerrarPorOverlay(evento) {
    if (evento.target.classList.contains("overlay-modal")) {
      this.alCerrar.emit();
    }
  }
  static {
    this.\u0275fac = function ModalComponent_Factory(t) {
      return new (t || _ModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], inputs: { abierto: "abierto", titulo: "titulo", tamano: "tamano" }, outputs: { alCerrar: "alCerrar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c02, decls: 1, vars: 1, consts: [[1, "overlay-modal"], [1, "overlay-modal", 3, "click"], [1, "bg-superficie-900", "border", "border-superficie-800", "rounded-2xl", "shadow-modal", "w-full", "max-w-lg", "mx-4", "animate-aparecer"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-superficie-800"], [1, "text-lg", "font-semibold", "text-superficie-100"], [1, "text-superficie-400", "hover:text-superficie-200", "transition-colors", "p-1", "rounded-lg", "hover:bg-superficie-800", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "p-6"]], template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, ModalComponent_Conditional_0_Template, 11, 5, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.abierto ? 0 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src\\app\\shared\\componentes\\modal\\modal.component.ts", lineNumber: 41 });
})();

// src/app/shared/componentes/notificacion-toast/notificacion-toast.component.ts
function NotificacionToastComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 1);
    \u0275\u0275element(1, "path", 9)(2, "polyline", 10);
    \u0275\u0275elementEnd();
  }
}
function NotificacionToastComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 1);
    \u0275\u0275element(1, "circle", 11)(2, "line", 12)(3, "line", 13);
    \u0275\u0275elementEnd();
  }
}
function NotificacionToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div");
    \u0275\u0275template(3, NotificacionToastComponent_Conditional_0_Conditional_3_Template, 3, 0, ":svg:svg", 1)(4, NotificacionToastComponent_Conditional_0_Conditional_4_Template, 4, 0, ":svg:svg", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2)(6, "p", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function NotificacionToastComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cerrar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 6);
    \u0275\u0275element(12, "line", 7)(13, "line", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("flex items-start gap-3 p-4 rounded-xl border shadow-flotante " + ctx_r1.clasesPorTipo);
    \u0275\u0275advance();
    \u0275\u0275classMap("flex-shrink-0 w-5 h-5 mt-0.5 " + ctx_r1.claseIcono);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r1.tipo === "exito" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r1.tipo === "error" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.mensaje);
  }
}
var NotificacionToastComponent = class _NotificacionToastComponent {
  constructor() {
    this.tipo = "exito";
    this.titulo = "";
    this.mensaje = "";
    this.duracion = 4e3;
    this.visible = false;
  }
  get clasesPorTipo() {
    return this.tipo === "exito" ? "bg-exito-500/10 border-exito-500/20 text-exito-400" : "bg-peligro-500/10 border-peligro-500/20 text-peligro-400";
  }
  get claseIcono() {
    return this.tipo === "exito" ? "text-exito-400" : "text-peligro-400";
  }
  mostrar(titulo, mensaje, tipo = "exito") {
    this.titulo = titulo;
    this.mensaje = mensaje;
    this.tipo = tipo;
    this.visible = true;
    clearTimeout(this.temporizador);
    this.temporizador = setTimeout(() => this.cerrar(), this.duracion);
  }
  cerrar() {
    this.visible = false;
    clearTimeout(this.temporizador);
  }
  static {
    this.\u0275fac = function NotificacionToastComponent_Factory(t) {
      return new (t || _NotificacionToastComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificacionToastComponent, selectors: [["app-notificacion-toast"]], inputs: { tipo: "tipo", titulo: "titulo", mensaje: "mensaje", duracion: "duracion" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "fixed", "top-6", "right-6", "z-50", "animate-deslizar-derecha", "max-w-sm"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "flex-1"], [1, "text-sm", "font-medium"], [1, "text-sm", "opacity-80", "mt-0.5"], [1, "flex-shrink-0", "opacity-60", "hover:opacity-100", "transition-opacity", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"]], template: function NotificacionToastComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NotificacionToastComponent_Conditional_0_Template, 14, 8, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.visible ? 0 : -1);
      }
    }, dependencies: [CommonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificacionToastComponent, { className: "NotificacionToastComponent", filePath: "src\\app\\shared\\componentes\\notificacion-toast\\notificacion-toast.component.ts", lineNumber: 41 });
})();

// src/app/componentes/productos/formulario-producto/formulario-producto.component.ts
var _forTrack0 = ($index, $item) => $item.valor;
function FormularioProductoComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre es obligatorio. ");
  }
}
function FormularioProductoComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " M\xEDnimo 3 caracteres. ");
  }
}
function FormularioProductoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275template(1, FormularioProductoComponent_Conditional_6_Conditional_1_Template, 1, 0)(2, FormularioProductoComponent_Conditional_6_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (ctx_r0.f["nombre"].errors == null ? null : ctx_r0.f["nombre"].errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx_r0.f["nombre"].errors == null ? null : ctx_r0.f["nombre"].errors["minlength"]) ? 2 : -1);
  }
}
function FormularioProductoComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El SKU es obligatorio. ");
  }
}
function FormularioProductoComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Solo letras may\xFAsculas, n\xFAmeros y guiones. ");
  }
}
function FormularioProductoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275template(1, FormularioProductoComponent_Conditional_11_Conditional_1_Template, 1, 0)(2, FormularioProductoComponent_Conditional_11_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (ctx_r0.f["sku"].errors == null ? null : ctx_r0.f["sku"].errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx_r0.f["sku"].errors == null ? null : ctx_r0.f["sku"].errors["pattern"]) ? 2 : -1);
  }
}
function FormularioProductoComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La descripci\xF3n es obligatoria. ");
  }
}
function FormularioProductoComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " M\xEDnimo 10 caracteres. ");
  }
}
function FormularioProductoComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275template(1, FormularioProductoComponent_Conditional_16_Conditional_1_Template, 1, 0)(2, FormularioProductoComponent_Conditional_16_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (ctx_r0.f["descripcion"].errors == null ? null : ctx_r0.f["descripcion"].errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx_r0.f["descripcion"].errors == null ? null : ctx_r0.f["descripcion"].errors["minlength"]) ? 2 : -1);
  }
}
function FormularioProductoComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El precio es obligatorio. ");
  }
}
function FormularioProductoComponent_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El precio no puede ser negativo. ");
  }
}
function FormularioProductoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275template(1, FormularioProductoComponent_Conditional_22_Conditional_1_Template, 1, 0)(2, FormularioProductoComponent_Conditional_22_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (ctx_r0.f["precio"].errors == null ? null : ctx_r0.f["precio"].errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx_r0.f["precio"].errors == null ? null : ctx_r0.f["precio"].errors["min"]) ? 2 : -1);
  }
}
function FormularioProductoComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La cantidad es obligatoria. ");
  }
}
function FormularioProductoComponent_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La cantidad no puede ser negativa. ");
  }
}
function FormularioProductoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275template(1, FormularioProductoComponent_Conditional_27_Conditional_1_Template, 1, 0)(2, FormularioProductoComponent_Conditional_27_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (ctx_r0.f["cantidad"].errors == null ? null : ctx_r0.f["cantidad"].errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx_r0.f["cantidad"].errors == null ? null : ctx_r0.f["cantidad"].errors["min"]) ? 2 : -1);
  }
}
function FormularioProductoComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.etiqueta);
  }
}
function FormularioProductoComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Seleccione una categor\xEDa.");
    \u0275\u0275elementEnd();
  }
}
function FormularioProductoComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const est_r3 = ctx.$implicit;
    \u0275\u0275property("value", est_r3.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(est_r3.etiqueta);
  }
}
function FormularioProductoComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "circle", 25)(2, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Guardando... ");
  }
}
function FormularioProductoComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.producto ? "Actualizar" : "Crear", " Producto ");
  }
}
var FormularioProductoComponent = class _FormularioProductoComponent {
  get f() {
    return this.formulario.controls;
  }
  constructor(fb) {
    this.fb = fb;
    this.producto = null;
    this.cargando = false;
    this.alGuardar = new EventEmitter();
    this.alCancelar = new EventEmitter();
    this.categorias = Object.values(CategoriaProducto).map((v) => ({
      valor: v,
      etiqueta: ETIQUETAS_CATEGORIA[v]
    }));
    this.estados = Object.values(EstadoProducto).map((v) => ({
      valor: v,
      etiqueta: ETIQUETAS_ESTADO[v]
    }));
  }
  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: [this.producto?.nombre || "", [Validators.required, Validators.minLength(3)]],
      descripcion: [this.producto?.descripcion || "", [Validators.required, Validators.minLength(10)]],
      precio: [this.producto?.precio || 0, [Validators.required, Validators.min(0)]],
      cantidad: [this.producto?.cantidad || 0, [Validators.required, Validators.min(0)]],
      categoria: [this.producto?.categoria || "", [Validators.required]],
      sku: [this.producto?.sku || "", [Validators.required, Validators.pattern(/^[A-Z0-9\-]+$/)]],
      estado: [this.producto?.estado || EstadoProducto.ACTIVO],
      imagenUrl: [this.producto?.imagenUrl || ""]
    });
  }
  enviar() {
    if (this.formulario.invalid) {
      Object.keys(this.formulario.controls).forEach((key) => {
        this.formulario.get(key)?.markAsTouched();
      });
      return;
    }
    this.alGuardar.emit(this.formulario.value);
  }
  static {
    this.\u0275fac = function FormularioProductoComponent_Factory(t) {
      return new (t || _FormularioProductoComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormularioProductoComponent, selectors: [["app-formulario-producto"]], inputs: { producto: "producto", cargando: "cargando" }, outputs: { alGuardar: "alGuardar", alCancelar: "alCancelar" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 9, consts: [[1, "space-y-5", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["for", "nombre", 1, "input-etiqueta"], ["id", "nombre", "type", "text", "formControlName", "nombre", "placeholder", "Ej: Semilla de Ma\xEDz H\xEDbrido", 1, "input-campo"], [1, "input-error"], ["for", "sku", 1, "input-etiqueta"], ["id", "sku", "type", "text", "formControlName", "sku", "placeholder", "Ej: SEM-MAIZ-001", 1, "input-campo", "uppercase"], ["for", "descripcion", 1, "input-etiqueta"], ["id", "descripcion", "formControlName", "descripcion", "placeholder", "Describa el producto con al menos 10 caracteres...", "rows", "3", 1, "input-campo", "min-h-[80px]", "resize-y"], ["for", "precio", 1, "input-etiqueta"], ["id", "precio", "type", "number", "formControlName", "precio", "placeholder", "0", "min", "0", 1, "input-campo"], ["for", "cantidad", 1, "input-etiqueta"], ["id", "cantidad", "type", "number", "formControlName", "cantidad", "placeholder", "0", "min", "0", 1, "input-campo"], ["for", "categoria", 1, "input-etiqueta"], ["id", "categoria", "formControlName", "categoria", 1, "input-campo"], ["value", "", "disabled", ""], [3, "value"], ["for", "estado", 1, "input-etiqueta"], ["id", "estado", "formControlName", "estado", 1, "input-campo"], ["for", "imagenUrl", 1, "input-etiqueta"], ["id", "imagenUrl", "type", "url", "formControlName", "imagenUrl", "placeholder", "https://ejemplo.com/imagen.jpg", 1, "input-campo"], [1, "flex", "items-center", "justify-end", "gap-3", "pt-4", "border-t", "border-superficie-800"], ["type", "button", 1, "btn-secundario", 3, "click"], ["type", "submit", 1, "btn-primario", 3, "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function FormularioProductoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function FormularioProductoComponent_Template_form_ngSubmit_0_listener() {
          return ctx.enviar();
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div")(3, "label", 2);
        \u0275\u0275text(4, "Nombre del producto *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "input", 3);
        \u0275\u0275template(6, FormularioProductoComponent_Conditional_6_Template, 3, 2, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div")(8, "label", 5);
        \u0275\u0275text(9, "C\xF3digo SKU *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275template(11, FormularioProductoComponent_Conditional_11_Template, 3, 2, "p", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div")(13, "label", 7);
        \u0275\u0275text(14, "Descripci\xF3n *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "textarea", 8);
        \u0275\u0275template(16, FormularioProductoComponent_Conditional_16_Template, 3, 2, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 1)(18, "div")(19, "label", 9);
        \u0275\u0275text(20, "Precio (COP) *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 10);
        \u0275\u0275template(22, FormularioProductoComponent_Conditional_22_Template, 3, 2, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "label", 11);
        \u0275\u0275text(25, "Cantidad en stock *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 12);
        \u0275\u0275template(27, FormularioProductoComponent_Conditional_27_Template, 3, 2, "p", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 1)(29, "div")(30, "label", 13);
        \u0275\u0275text(31, "Categor\xEDa *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "select", 14)(33, "option", 15);
        \u0275\u0275text(34, "Seleccione una categor\xEDa");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(35, FormularioProductoComponent_For_36_Template, 2, 2, "option", 16, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(37, FormularioProductoComponent_Conditional_37_Template, 2, 0, "p", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div")(39, "label", 17);
        \u0275\u0275text(40, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "select", 18);
        \u0275\u0275repeaterCreate(42, FormularioProductoComponent_For_43_Template, 2, 2, "option", 16, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div")(45, "label", 19);
        \u0275\u0275text(46, "URL de imagen (opcional)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 21)(49, "button", 22);
        \u0275\u0275listener("click", function FormularioProductoComponent_Template_button_click_49_listener() {
          return ctx.alCancelar.emit();
        });
        \u0275\u0275text(50, " Cancelar ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 23);
        \u0275\u0275template(52, FormularioProductoComponent_Conditional_52_Template, 4, 0)(53, FormularioProductoComponent_Conditional_53_Template, 1, 1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.formulario);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.f["nombre"].touched && ctx.f["nombre"].errors ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(11, ctx.f["sku"].touched && ctx.f["sku"].errors ? 11 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(16, ctx.f["descripcion"].touched && ctx.f["descripcion"].errors ? 16 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(22, ctx.f["precio"].touched && ctx.f["precio"].errors ? 22 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(27, ctx.f["cantidad"].touched && ctx.f["cantidad"].errors ? 27 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.categorias);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(37, ctx.f["categoria"].touched && ctx.f["categoria"].errors ? 37 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.estados);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.formulario.invalid || ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275conditional(52, ctx.cargando ? 52 : 53);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormularioProductoComponent, { className: "FormularioProductoComponent", filePath: "src\\app\\componentes\\productos\\formulario-producto\\formulario-producto.component.ts", lineNumber: 140 });
})();

// src/app/componentes/productos/lista-productos/lista-productos.component.ts
var _c03 = ["toast"];
var _forTrack02 = ($index, $item) => $item.valor;
var _forTrack1 = ($index, $item) => $item._id;
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3, 4, 5, 6];
function ListaProductosComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.etiqueta);
  }
}
function ListaProductosComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const est_r3 = ctx.$implicit;
    \u0275\u0275property("value", est_r3.valor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(est_r3.etiqueta);
  }
}
function ListaProductosComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-carga", 20);
  }
  if (rf & 2) {
    \u0275\u0275property("filas", \u0275\u0275pureFunction0(2, _c1))("columnas", \u0275\u0275pureFunction0(3, _c2));
  }
}
function ListaProductosComponent_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 27);
    \u0275\u0275element(3, "path", 28)(4, "path", 29)(5, "path", 30)(6, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 32);
    \u0275\u0275text(8, "No hay productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 33);
    \u0275\u0275text(10, "Cree su primer producto para comenzar.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.abrirFormularioCrear());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 6);
    \u0275\u0275element(13, "line", 7)(14, "line", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Crear Producto ");
    \u0275\u0275elementEnd()();
  }
}
function ListaProductosComponent_Conditional_33_Conditional_3_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 46)(2, "div", 47)(3, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 49);
    \u0275\u0275element(5, "path", 28)(6, "path", 29)(7, "path", 30)(8, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 50)(10, "p", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 52);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td", 53)(15, "code", 54);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 46)(18, "span", 55);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 56);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 57)(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 58)(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 46)(30, "div", 59)(31, "button", 60);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_3_For_20_Template_button_click_31_listener() {
      const producto_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.abrirFormularioEditar(producto_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 6);
    \u0275\u0275element(33, "path", 61)(34, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "button", 63);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_3_For_20_Template_button_click_35_listener() {
      const producto_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.confirmarEliminar(producto_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 6);
    \u0275\u0275element(37, "polyline", 64)(38, "path", 65)(39, "line", 66)(40, "line", 67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const producto_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(producto_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(producto_r7.descripcion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(producto_r7.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.obtenerEtiquetaCategoria(producto_r7.categoria));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(22, 11, producto_r7.precio, "COP", "symbol-narrow", "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(producto_r7.cantidad === 0 ? "text-peligro-400" : "text-superficie-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", producto_r7.cantidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r4.obtenerClaseEstado(producto_r7.estado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.obtenerEtiquetaEstado(producto_r7.estado), " ");
  }
}
function ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_For_7_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.cambiarPagina(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const pag_r9 = \u0275\u0275nextContext();
    \u0275\u0275classMap(p_r11 === pag_r9.pagina ? "bg-primario-600 text-white" : "text-superficie-400 hover:bg-superficie-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11, " ");
  }
}
function ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "p", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 69)(4, "button", 70);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_Template_button_click_4_listener() {
      const pag_r9 = \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.cambiarPagina(pag_r9.pagina - 1));
    });
    \u0275\u0275text(5, " Anterior ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_For_7_Template, 2, 3, "button", 71, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 70);
    \u0275\u0275listener("click", function ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_Template_button_click_8_listener() {
      const pag_r9 = \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.cambiarPagina(pag_r9.pagina + 1));
    });
    \u0275\u0275text(9, " Siguiente ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pag_r9 = ctx;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Mostrando ", (pag_r9.pagina - 1) * pag_r9.limite + 1, " a ", pag_r9.pagina * pag_r9.limite > pag_r9.total ? pag_r9.total : pag_r9.pagina * pag_r9.limite, " de ", pag_r9.total, " productos ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", pag_r9.pagina <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.generarPaginas(pag_r9.totalPaginas));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", pag_r9.pagina >= pag_r9.totalPaginas);
  }
}
function ListaProductosComponent_Conditional_33_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 36)(2, "thead")(3, "tr", 37)(4, "th", 38);
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 39);
    \u0275\u0275text(7, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 38);
    \u0275\u0275text(9, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 40);
    \u0275\u0275text(11, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 41);
    \u0275\u0275text(13, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 42);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 40);
    \u0275\u0275text(17, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 43);
    \u0275\u0275repeaterCreate(19, ListaProductosComponent_Conditional_33_Conditional_3_For_20_Template, 41, 16, "tr", 44, _forTrack1);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ListaProductosComponent_Conditional_33_Conditional_3_Conditional_22_Template, 10, 5, "div", 45);
    \u0275\u0275pipe(23, "async");
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 1, ctx_r4.productos$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(22, (tmp_4_0 = \u0275\u0275pipeBind1(23, 3, ctx_r4.infoPaginacion$)) ? 22 : -1, tmp_4_0);
  }
}
function ListaProductosComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, ListaProductosComponent_Conditional_33_Conditional_1_Template, 16, 0, "div", 25);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ListaProductosComponent_Conditional_33_Conditional_3_Template, 24, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r4.productos$)) == null ? null : tmp_2_0.length) === 0 ? 1 : 3);
  }
}
var ListaProductosComponent = class _ListaProductosComponent {
  constructor(store) {
    this.store = store;
    this.productos$ = this.store.select(seleccionarTodosProductos);
    this.cargando$ = this.store.select(seleccionarCargando);
    this.error$ = this.store.select(seleccionarError);
    this.mensajeExito$ = this.store.select(seleccionarMensajeExito);
    this.infoPaginacion$ = this.store.select(seleccionarInfoPaginacion);
    this.terminoBusqueda = "";
    this.filtroCategoria = "";
    this.filtroEstado = "";
    this.paginaActual = 1;
    this.mostrarFormulario = false;
    this.mostrarConfirmarEliminar = false;
    this.productoEditando = null;
    this.productoEliminar = null;
    this.categorias = Object.values(CategoriaProducto).map((v) => ({
      valor: v,
      etiqueta: ETIQUETAS_CATEGORIA[v]
    }));
    this.estados = Object.values(EstadoProducto).map((v) => ({
      valor: v,
      etiqueta: ETIQUETAS_ESTADO[v]
    }));
    this.destruir$ = new Subject();
    this.busqueda$ = new Subject();
  }
  ngOnInit() {
    this.cargarProductos();
    this.busqueda$.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destruir$)).subscribe(() => {
      this.paginaActual = 1;
      this.cargarProductos();
    });
    this.mensajeExito$.pipe(takeUntil(this.destruir$)).subscribe((mensaje) => {
      if (mensaje && this.toast) {
        this.toast.mostrar("\xA1\xC9xito!", mensaje, "exito");
        this.cerrarFormulario();
        this.mostrarConfirmarEliminar = false;
      }
    });
    this.error$.pipe(takeUntil(this.destruir$)).subscribe((error) => {
      if (error && this.toast) {
        this.toast.mostrar("Error", error, "error");
      }
    });
  }
  ngOnDestroy() {
    this.destruir$.next();
    this.destruir$.complete();
  }
  cargarProductos() {
    this.store.dispatch(ProductosAcciones.cargarProductos({
      consulta: {
        pagina: this.paginaActual,
        limite: 10,
        busqueda: this.terminoBusqueda || void 0,
        categoria: this.filtroCategoria || void 0,
        estado: this.filtroEstado || void 0
      }
    }));
  }
  alBuscar(termino) {
    this.busqueda$.next(termino);
  }
  aplicarFiltros() {
    this.paginaActual = 1;
    this.cargarProductos();
  }
  cambiarPagina(pagina) {
    this.paginaActual = pagina;
    this.cargarProductos();
  }
  abrirFormularioCrear() {
    this.productoEditando = null;
    this.mostrarFormulario = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }
  abrirFormularioEditar(producto) {
    this.productoEditando = __spreadValues({}, producto);
    this.mostrarFormulario = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }
  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.productoEditando = null;
  }
  guardarProducto(datos) {
    if (this.productoEditando) {
      this.store.dispatch(ProductosAcciones.actualizarProducto({
        id: this.productoEditando._id,
        producto: datos
      }));
    } else {
      this.store.dispatch(ProductosAcciones.crearProducto({ producto: datos }));
    }
  }
  confirmarEliminar(producto) {
    this.productoEliminar = producto;
    this.mostrarConfirmarEliminar = true;
    this.store.dispatch(ProductosAcciones.limpiarMensaje());
  }
  ejecutarEliminar() {
    if (this.productoEliminar) {
      this.store.dispatch(ProductosAcciones.eliminarProducto({ id: this.productoEliminar._id }));
    }
  }
  obtenerEtiquetaCategoria(categoria) {
    return ETIQUETAS_CATEGORIA[categoria] || categoria;
  }
  obtenerEtiquetaEstado(estado) {
    return ETIQUETAS_ESTADO[estado] || estado;
  }
  obtenerClaseEstado(estado) {
    switch (estado) {
      case EstadoProducto.ACTIVO:
        return "badge-exito";
      case EstadoProducto.INACTIVO:
        return "badge-advertencia";
      case EstadoProducto.AGOTADO:
        return "badge-peligro";
      default:
        return "badge-info";
    }
  }
  generarPaginas(total) {
    const paginas = [];
    const max = Math.min(total, 5);
    let inicio = Math.max(1, this.paginaActual - 2);
    const fin = Math.min(total, inicio + max - 1);
    inicio = Math.max(1, fin - max + 1);
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }
    return paginas;
  }
  static {
    this.\u0275fac = function ListaProductosComponent_Factory(t) {
      return new (t || _ListaProductosComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaProductosComponent, selectors: [["app-lista-productos"]], viewQuery: function ListaProductosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toast = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 18, consts: [["toast", ""], [1, "mb-8", "animate-deslizar-arriba"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "text-2xl", "font-bold", "text-superficie-100"], [1, "text-sm", "text-superficie-400", "mt-1"], [1, "btn-primario", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "tarjeta", "mb-6", "animate-deslizar-arriba", 2, "animation-delay", "0.1s"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-1", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-4", "h-4", "text-superficie-500"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Buscar por nombre, descripci\xF3n o SKU...", 1, "input-campo", "pl-10", 3, "ngModelChange", "ngModel"], [1, "input-campo", "md:w-48", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "input-campo", "md:w-40", 3, "ngModelChange", "ngModel"], ["tipo", "tabla", 3, "filas", "columnas"], ["tamano", "grande", 3, "alCerrar", "abierto", "titulo"], [3, "alGuardar", "alCancelar", "producto", "cargando"], [3, "alConfirmar", "alCancelar", "abierto", "titulo", "mensaje", "cargando"], [1, "tarjeta", "overflow-hidden", "animate-deslizar-arriba", 2, "animation-delay", "0.2s"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16"], [1, "w-16", "h-16", "rounded-2xl", "bg-superficie-800", "flex", "items-center", "justify-center", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-8", "h-8", "text-superficie-500"], ["d", "m7.5 4.27 9 5.15"], ["d", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["d", "m3.3 7 8.7 5 8.7-5"], ["d", "M12 22V12"], [1, "text-lg", "font-semibold", "text-superficie-300"], [1, "text-sm", "text-superficie-500", "mt-1"], [1, "btn-primario", "mt-4", 3, "click"], [1, "overflow-x-auto"], [1, "w-full", "text-sm"], [1, "border-b", "border-superficie-800"], [1, "text-left", "py-3", "px-4", "text-xs", "font-semibold", "text-superficie-400", "uppercase", "tracking-wider"], [1, "text-left", "py-3", "px-4", "text-xs", "font-semibold", "text-superficie-400", "uppercase", "tracking-wider", "hidden", "md:table-cell"], [1, "text-right", "py-3", "px-4", "text-xs", "font-semibold", "text-superficie-400", "uppercase", "tracking-wider"], [1, "text-right", "py-3", "px-4", "text-xs", "font-semibold", "text-superficie-400", "uppercase", "tracking-wider", "hidden", "sm:table-cell"], [1, "text-center", "py-3", "px-4", "text-xs", "font-semibold", "text-superficie-400", "uppercase", "tracking-wider"], [1, "divide-y", "divide-superficie-800/50"], [1, "fila-hover"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-4", "py-4", "border-t", "border-superficie-800", "gap-4"], [1, "py-3", "px-4"], [1, "flex", "items-center", "gap-3"], [1, "w-9", "h-9", "rounded-xl", "bg-primario-600/10", "flex", "items-center", "justify-center", "flex-shrink-0"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "text-primario-400"], [1, "min-w-0"], [1, "font-medium", "text-superficie-200", "truncate"], [1, "text-xs", "text-superficie-500", "truncate", "max-w-xs"], [1, "py-3", "px-4", "hidden", "md:table-cell"], [1, "text-xs", "bg-superficie-800", "px-2", "py-1", "rounded-lg", "text-superficie-300", "font-mono"], [1, "badge-info"], [1, "py-3", "px-4", "text-right", "font-medium", "text-superficie-200"], [1, "py-3", "px-4", "text-right", "hidden", "sm:table-cell"], [1, "py-3", "px-4", "text-center"], [1, "flex", "items-center", "justify-end", "gap-1"], ["title", "Editar", 1, "p-2", "rounded-lg", "text-superficie-400", "hover:text-primario-400", "hover:bg-primario-500/10", "transition-all", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Eliminar", 1, "p-2", "rounded-lg", "text-superficie-400", "hover:text-peligro-400", "hover:bg-peligro-500/10", "transition-all", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "text-sm", "text-superficie-500"], [1, "flex", "items-center", "gap-1"], [1, "px-3", "py-1.5", "rounded-lg", "text-sm", "text-superficie-400", "hover:text-superficie-200", "hover:bg-superficie-800", "disabled:opacity-30", "disabled:cursor-not-allowed", "transition-all", 3, "click", "disabled"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-all", 3, "class"], [1, "w-8", "h-8", "rounded-lg", "text-sm", "font-medium", "transition-all", 3, "click"]], template: function ListaProductosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275element(0, "app-notificacion-toast", null, 0);
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
        \u0275\u0275text(6, "Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Gestione el inventario de productos del sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function ListaProductosComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.abrirFormularioCrear());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 6);
        \u0275\u0275element(11, "line", 7)(12, "line", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Nuevo Producto ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 12);
        \u0275\u0275element(18, "circle", 13)(19, "line", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function ListaProductosComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.terminoBusqueda, $event) || (ctx.terminoBusqueda = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ListaProductosComponent_Template_input_ngModelChange_20_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.alBuscar($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "select", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ListaProductosComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filtroCategoria, $event) || (ctx.filtroCategoria = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ListaProductosComponent_Template_select_ngModelChange_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.aplicarFiltros());
        });
        \u0275\u0275elementStart(22, "option", 17);
        \u0275\u0275text(23, "Todas las categor\xEDas");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(24, ListaProductosComponent_For_25_Template, 2, 2, "option", 18, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ListaProductosComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function ListaProductosComponent_Template_select_ngModelChange_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.aplicarFiltros());
        });
        \u0275\u0275elementStart(27, "option", 17);
        \u0275\u0275text(28, "Todos los estados");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, ListaProductosComponent_For_30_Template, 2, 2, "option", 18, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(31, ListaProductosComponent_Conditional_31_Template, 1, 4, "app-skeleton-carga", 20);
        \u0275\u0275pipe(32, "async");
        \u0275\u0275template(33, ListaProductosComponent_Conditional_33_Template, 4, 3);
        \u0275\u0275elementStart(34, "app-modal", 21);
        \u0275\u0275listener("alCerrar", function ListaProductosComponent_Template_app_modal_alCerrar_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrarFormulario());
        });
        \u0275\u0275elementStart(35, "app-formulario-producto", 22);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275listener("alGuardar", function ListaProductosComponent_Template_app_formulario_producto_alGuardar_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.guardarProducto($event));
        })("alCancelar", function ListaProductosComponent_Template_app_formulario_producto_alCancelar_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cerrarFormulario());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "app-confirmar-eliminacion", 23);
        \u0275\u0275pipe(38, "async");
        \u0275\u0275listener("alConfirmar", function ListaProductosComponent_Template_app_confirmar_eliminacion_alConfirmar_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.ejecutarEliminar());
        })("alCancelar", function ListaProductosComponent_Template_app_confirmar_eliminacion_alCancelar_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mostrarConfirmarEliminar = false);
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275twoWayProperty("ngModel", ctx.terminoBusqueda);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroCategoria);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categorias);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroEstado);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.estados);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(31, \u0275\u0275pipeBind1(32, 12, ctx.cargando$) ? 31 : 33);
        \u0275\u0275advance(3);
        \u0275\u0275property("abierto", ctx.mostrarFormulario)("titulo", ctx.productoEditando ? "Editar Producto" : "Nuevo Producto");
        \u0275\u0275advance();
        \u0275\u0275property("producto", ctx.productoEditando)("cargando", \u0275\u0275pipeBind1(36, 14, ctx.cargando$) || false);
        \u0275\u0275advance(2);
        \u0275\u0275property("abierto", ctx.mostrarConfirmarEliminar)("titulo", "\xBFEliminar producto?")("mensaje", "El producto '" + ((ctx.productoEliminar == null ? null : ctx.productoEliminar.nombre) || "") + "' ser\xE1 eliminado permanentemente. Esta acci\xF3n no se puede deshacer.")("cargando", \u0275\u0275pipeBind1(38, 16, ctx.cargando$) || false);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      CurrencyPipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      SkeletonCargaComponent,
      ConfirmarEliminacionComponent,
      ModalComponent,
      NotificacionToastComponent,
      FormularioProductoComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaProductosComponent, { className: "ListaProductosComponent", filePath: "src\\app\\componentes\\productos\\lista-productos\\lista-productos.component.ts", lineNumber: 256 });
})();
export {
  ListaProductosComponent
};
//# sourceMappingURL=chunk-OIZLEIRK.js.map

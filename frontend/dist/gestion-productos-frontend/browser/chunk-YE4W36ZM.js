import {
  AutenticacionServicio
} from "./chunk-E3XJHC7M.js";
import {
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-2YL5TQRH.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-BK2WVXHI.js";

// src/app/shared/componentes/diseno-principal/diseno-principal.component.ts
function DisenoPrincipalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function DisenoPrincipalComponent_Conditional_49_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuMovilAbierto = false);
    });
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "aside", 39)(3, "div", 2)(4, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 40);
    \u0275\u0275element(6, "path", 5)(7, "path", 6)(8, "path", 7)(9, "path", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "h1", 41);
    \u0275\u0275text(11, "Gesti\xF3n de Productos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "nav", 42)(13, "a", 43);
    \u0275\u0275listener("click", function DisenoPrincipalComponent_Conditional_49_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.menuMovilAbierto = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 44);
    \u0275\u0275element(15, "path", 5)(16, "path", 6)(17, "path", 7)(18, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Productos ");
    \u0275\u0275elementEnd()()()();
  }
}
var DisenoPrincipalComponent = class _DisenoPrincipalComponent {
  constructor(autenticacionServicio, router) {
    this.autenticacionServicio = autenticacionServicio;
    this.router = router;
    this.menuMovilAbierto = false;
    this.nombreUsuario = "";
    this.correoUsuario = "";
    const usuario = this.autenticacionServicio.obtenerUsuario();
    if (usuario) {
      this.nombreUsuario = usuario.nombre;
      this.correoUsuario = usuario.correoElectronico;
    }
  }
  obtenerInicial() {
    return this.nombreUsuario ? this.nombreUsuario.charAt(0).toUpperCase() : "U";
  }
  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
    this.router.navigate(["/iniciar-sesion"]);
  }
  static {
    this.\u0275fac = function DisenoPrincipalComponent_Factory(t) {
      return new (t || _DisenoPrincipalComponent)(\u0275\u0275directiveInject(AutenticacionServicio), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisenoPrincipalComponent, selectors: [["app-diseno-principal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 4, consts: [[1, "min-h-screen", "flex", "bg-superficie-950"], [1, "hidden", "lg:flex", "lg:flex-col", "lg:w-64", "bg-superficie-900", "border-r", "border-superficie-800"], [1, "flex", "items-center", "gap-3", "px-6", "py-5", "border-b", "border-superficie-800"], [1, "w-8", "h-8", "rounded-xl", "bg-primario-600", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-white"], ["d", "m7.5 4.27 9 5.15"], ["d", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["d", "m3.3 7 8.7 5 8.7-5"], ["d", "M12 22V12"], [1, "text-sm", "font-bold", "text-superficie-100"], [1, "text-xs", "text-superficie-400"], [1, "flex-1", "px-3", "py-4", "space-y-1"], ["routerLink", "/productos", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "text-superficie-300", "hover:text-superficie-100", "hover:bg-superficie-800", "transition-all"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], [1, "px-3", "py-4", "border-t", "border-superficie-800"], [1, "flex", "items-center", "gap-3", "px-3", "py-2"], [1, "w-8", "h-8", "rounded-full", "bg-primario-600/20", "flex", "items-center", "justify-center"], [1, "text-sm", "font-semibold", "text-primario-400"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-superficie-200", "truncate"], [1, "text-xs", "text-superficie-500", "truncate"], [1, "flex-1", "flex", "flex-col", "min-h-screen"], [1, "sticky", "top-0", "z-30", "flex", "items-center", "justify-between", "px-6", "py-4", "bg-superficie-950/80", "backdrop-blur-xl", "border-b", "border-superficie-800"], [1, "lg:hidden", "text-superficie-400", "hover:text-superficie-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6"], ["x1", "4", "y1", "12", "x2", "20", "y2", "12"], ["x1", "4", "y1", "6", "x2", "20", "y2", "6"], ["x1", "4", "y1", "18", "x2", "20", "y2", "18"], [1, "flex-1"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "rounded-xl", "text-sm", "text-superficie-400", "hover:text-peligro-400", "hover:bg-peligro-500/10", "transition-all", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "flex-1", "p-6"], [1, "fixed", "inset-0", "z-40", "lg:hidden"], [1, "fixed", "inset-0", "z-40", "lg:hidden", 3, "click"], [1, "absolute", "inset-0", "bg-black/60", "backdrop-blur-sm"], [1, "relative", "w-64", "h-full", "bg-superficie-900", "border-r", "border-superficie-800", "animate-deslizar-derecha"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5", "text-white"], [1, "text-sm", "font-bold", "text-white"], [1, "px-3", "py-4"], ["routerLink", "/productos", 1, "flex", "items-center", "gap-3", "px-3", "py-2.5", "rounded-xl", "text-sm", "font-medium", "text-superficie-300", "hover:text-white", "hover:bg-superficie-800", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-5", "h-5"]], template: function DisenoPrincipalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "div")(10, "h1", 9);
        \u0275\u0275text(11, "Gesti\xF3n de");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 10);
        \u0275\u0275text(13, "Productos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "nav", 11)(15, "a", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(16, "svg", 13);
        \u0275\u0275element(17, "path", 5)(18, "path", 6)(19, "path", 7)(20, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Productos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "span", 17);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 18)(28, "p", 19);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 20);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 21)(33, "header", 22)(34, "button", 23);
        \u0275\u0275listener("click", function DisenoPrincipalComponent_Template_button_click_34_listener() {
          return ctx.menuMovilAbierto = !ctx.menuMovilAbierto;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(35, "svg", 24);
        \u0275\u0275element(36, "line", 25)(37, "line", 26)(38, "line", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(39, "div", 28);
        \u0275\u0275elementStart(40, "div", 29)(41, "button", 30);
        \u0275\u0275listener("click", function DisenoPrincipalComponent_Template_button_click_41_listener() {
          return ctx.cerrarSesion();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(42, "svg", 31);
        \u0275\u0275element(43, "path", 32)(44, "polyline", 33)(45, "line", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " Cerrar sesi\xF3n ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "main", 35);
        \u0275\u0275element(48, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, DisenoPrincipalComponent_Conditional_49_Template, 20, 0, "div", 36);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate1(" ", ctx.obtenerInicial(), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.nombreUsuario);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.correoUsuario);
        \u0275\u0275advance(18);
        \u0275\u0275conditional(49, ctx.menuMovilAbierto ? 49 : -1);
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisenoPrincipalComponent, { className: "DisenoPrincipalComponent", filePath: "src\\app\\shared\\componentes\\diseno-principal\\diseno-principal.component.ts", lineNumber: 108 });
})();
export {
  DisenoPrincipalComponent
};
//# sourceMappingURL=chunk-YE4W36ZM.js.map

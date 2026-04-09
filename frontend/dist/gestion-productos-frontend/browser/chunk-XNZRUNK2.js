import {
  AutenticacionServicio
} from "./chunk-E3XJHC7M.js";
import {
  Router,
  RouterLink
} from "./chunk-2YL5TQRH.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-26KWDOZG.js";
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BK2WVXHI.js";

// src/app/componentes/autenticacion/inicio-sesion/inicio-sesion.component.ts
function InicioSesionComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El correo electr\xF3nico es obligatorio. ");
  }
}
function InicioSesionComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingrese un correo electr\xF3nico v\xE1lido. ");
  }
}
function InicioSesionComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275template(1, InicioSesionComponent_Conditional_19_Conditional_1_Template, 1, 0)(2, InicioSesionComponent_Conditional_19_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_1_0 = ctx_r0.formulario.get("correoElectronico")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_2_0 = ctx_r0.formulario.get("correoElectronico")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]) ? 2 : -1);
  }
}
function InicioSesionComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a es obligatoria. ");
  }
}
function InicioSesionComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a debe tener al menos 6 caracteres. ");
  }
}
function InicioSesionComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275template(1, InicioSesionComponent_Conditional_24_Conditional_1_Template, 1, 0)(2, InicioSesionComponent_Conditional_24_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_1_0 = ctx_r0.formulario.get("contrasena")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_2_0 = ctx_r0.formulario.get("contrasena")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function InicioSesionComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "circle", 25)(3, "line", 26)(4, "line", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorServidor, " ");
  }
}
function InicioSesionComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 28);
    \u0275\u0275element(1, "circle", 29)(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Iniciando sesi\xF3n... ");
  }
}
function InicioSesionComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Iniciar sesi\xF3n ");
  }
}
var InicioSesionComponent = class _InicioSesionComponent {
  constructor(fb, autenticacionServicio, router) {
    this.fb = fb;
    this.autenticacionServicio = autenticacionServicio;
    this.router = router;
    this.cargando = false;
    this.errorServidor = null;
    this.formulario = this.fb.group({
      correoElectronico: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  iniciarSesion() {
    if (this.formulario.invalid)
      return;
    this.cargando = true;
    this.errorServidor = null;
    this.autenticacionServicio.iniciarSesion(this.formulario.value).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(["/productos"]);
      },
      error: (error) => {
        this.cargando = false;
        this.errorServidor = error.error?.mensaje || "Error al iniciar sesi\xF3n. Intente nuevamente.";
      }
    });
  }
  static {
    this.\u0275fac = function InicioSesionComponent_Factory(t) {
      return new (t || _InicioSesionComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AutenticacionServicio), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InicioSesionComponent, selectors: [["app-inicio-sesion"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-superficie-950", "px-4"], [1, "w-full", "max-w-md", "animate-deslizar-arriba"], [1, "text-center", "mb-8"], [1, "inline-flex", "items-center", "justify-center", "w-14", "h-14", "rounded-2xl", "bg-primario-600", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-8", "h-8", "text-white"], ["d", "m7.5 4.27 9 5.15"], ["d", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"], ["d", "m3.3 7 8.7 5 8.7-5"], ["d", "M12 22V12"], [1, "text-2xl", "font-bold", "text-superficie-100"], [1, "text-superficie-400", "text-sm", "mt-2"], [1, "tarjeta"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], ["for", "correo", 1, "input-etiqueta"], ["id", "correo", "type", "email", "formControlName", "correoElectronico", "placeholder", "ejemplo@correo.com", "autocomplete", "email", 1, "input-campo"], [1, "input-error"], ["for", "contrasena", 1, "input-etiqueta"], ["id", "contrasena", "type", "password", "formControlName", "contrasena", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "input-campo"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-xl", "bg-peligro-500/10", "border", "border-peligro-500/20", "text-peligro-400", "text-sm"], ["type", "submit", 1, "btn-primario", "w-full", "justify-center", 3, "disabled"], [1, "mt-6", "text-center"], [1, "text-sm", "text-superficie-500"], ["routerLink", "/registrar", 1, "text-primario-400", "hover:text-primario-300", "font-medium", "transition-colors"], [1, "text-center", "text-xs", "text-superficie-600", "mt-6"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function InicioSesionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "h1", 9);
        \u0275\u0275text(10, "Gesti\xF3n de Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12, "Ingrese sus credenciales para acceder al sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 11)(14, "form", 12);
        \u0275\u0275listener("ngSubmit", function InicioSesionComponent_Template_form_ngSubmit_14_listener() {
          return ctx.iniciarSesion();
        });
        \u0275\u0275elementStart(15, "div")(16, "label", 13);
        \u0275\u0275text(17, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 14);
        \u0275\u0275template(19, InicioSesionComponent_Conditional_19_Template, 3, 2, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div")(21, "label", 16);
        \u0275\u0275text(22, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 17);
        \u0275\u0275template(24, InicioSesionComponent_Conditional_24_Template, 3, 2, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, InicioSesionComponent_Conditional_25_Template, 6, 1, "div", 18);
        \u0275\u0275elementStart(26, "button", 19);
        \u0275\u0275template(27, InicioSesionComponent_Conditional_27_Template, 4, 0)(28, InicioSesionComponent_Conditional_28_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 20)(30, "p", 21);
        \u0275\u0275text(31, " \xBFNo tiene cuenta? ");
        \u0275\u0275elementStart(32, "a", 22);
        \u0275\u0275text(33, " Reg\xEDstrese aqu\xED ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "p", 23);
        \u0275\u0275text(35, " Sistema de Gesti\xF3n de Productos \u2014 Sector Agropecuario ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.formulario);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_1_0 = ctx.formulario.get("correoElectronico")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.formulario.get("correoElectronico")) == null ? null : tmp_1_0.errors) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_2_0 = ctx.formulario.get("contrasena")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.formulario.get("contrasena")) == null ? null : tmp_2_0.errors) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.errorServidor ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.formulario.invalid || ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.cargando ? 27 : 28);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InicioSesionComponent, { className: "InicioSesionComponent", filePath: "src\\app\\componentes\\autenticacion\\inicio-sesion\\inicio-sesion.component.ts", lineNumber: 118 });
})();
export {
  InicioSesionComponent
};
//# sourceMappingURL=chunk-XNZRUNK2.js.map

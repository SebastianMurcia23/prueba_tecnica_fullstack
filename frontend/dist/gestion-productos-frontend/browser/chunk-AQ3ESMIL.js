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

// src/app/componentes/autenticacion/registro/registro.component.ts
function RegistroComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre es obligatorio. ");
  }
}
function RegistroComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El nombre debe tener al menos 2 caracteres. ");
  }
}
function RegistroComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275template(1, RegistroComponent_Conditional_19_Conditional_1_Template, 1, 0)(2, RegistroComponent_Conditional_19_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ((tmp_1_0 = ctx_r0.formulario.get("nombre")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ((tmp_2_0 = ctx_r0.formulario.get("nombre")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]) ? 2 : -1);
  }
}
function RegistroComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " El correo electr\xF3nico es obligatorio. ");
  }
}
function RegistroComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Ingrese un correo electr\xF3nico v\xE1lido. ");
  }
}
function RegistroComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275template(1, RegistroComponent_Conditional_24_Conditional_1_Template, 1, 0)(2, RegistroComponent_Conditional_24_Conditional_2_Template, 1, 0);
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
function RegistroComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " La contrase\xF1a es obligatoria. ");
  }
}
function RegistroComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Debe tener al menos 6 caracteres. ");
  }
}
function RegistroComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275template(1, RegistroComponent_Conditional_29_Conditional_1_Template, 1, 0)(2, RegistroComponent_Conditional_29_Conditional_2_Template, 1, 0);
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
function RegistroComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25);
    \u0275\u0275element(2, "circle", 26)(3, "line", 27)(4, "line", 28);
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
function RegistroComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "circle", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Creando cuenta... ");
  }
}
function RegistroComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Crear cuenta ");
  }
}
var RegistroComponent = class _RegistroComponent {
  constructor(fb, autenticacionServicio, router) {
    this.fb = fb;
    this.autenticacionServicio = autenticacionServicio;
    this.router = router;
    this.cargando = false;
    this.errorServidor = null;
    this.formulario = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      correoElectronico: ["", [Validators.required, Validators.email]],
      contrasena: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  registrar() {
    if (this.formulario.invalid)
      return;
    this.cargando = true;
    this.errorServidor = null;
    this.autenticacionServicio.registrar(this.formulario.value).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(["/productos"]);
      },
      error: (error) => {
        this.cargando = false;
        this.errorServidor = error.error?.mensaje || "Error al registrar. Intente nuevamente.";
      }
    });
  }
  static {
    this.\u0275fac = function RegistroComponent_Factory(t) {
      return new (t || _RegistroComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AutenticacionServicio), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroComponent, selectors: [["app-registro"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 7, consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-superficie-950", "px-4"], [1, "w-full", "max-w-md", "animate-deslizar-arriba"], [1, "text-center", "mb-8"], [1, "inline-flex", "items-center", "justify-center", "w-14", "h-14", "rounded-2xl", "bg-primario-600", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-8", "h-8", "text-white"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "22", "y1", "11", "x2", "16", "y2", "11"], [1, "text-2xl", "font-bold", "text-superficie-100"], [1, "text-superficie-400", "text-sm", "mt-2"], [1, "tarjeta"], [1, "space-y-5", 3, "ngSubmit", "formGroup"], ["for", "nombre", 1, "input-etiqueta"], ["id", "nombre", "type", "text", "formControlName", "nombre", "placeholder", "Juan Carlos P\xE9rez", "autocomplete", "name", 1, "input-campo"], [1, "input-error"], ["for", "correo", 1, "input-etiqueta"], ["id", "correo", "type", "email", "formControlName", "correoElectronico", "placeholder", "ejemplo@correo.com", "autocomplete", "email", 1, "input-campo"], ["for", "contrasena", 1, "input-etiqueta"], ["id", "contrasena", "type", "password", "formControlName", "contrasena", "placeholder", "M\xEDnimo 6 caracteres", "autocomplete", "new-password", 1, "input-campo"], [1, "flex", "items-center", "gap-2", "p-3", "rounded-xl", "bg-peligro-500/10", "border", "border-peligro-500/20", "text-peligro-400", "text-sm"], ["type", "submit", 1, "btn-primario", "w-full", "justify-center", 3, "disabled"], [1, "mt-6", "text-center"], [1, "text-sm", "text-superficie-500"], ["routerLink", "/iniciar-sesion", 1, "text-primario-400", "hover:text-primario-300", "font-medium", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-4", "h-4", "flex-shrink-0"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-4", "h-4"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"]], template: function RegistroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5)(6, "circle", 6)(7, "line", 7)(8, "line", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "h1", 9);
        \u0275\u0275text(10, "Crear cuenta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12, "Complete los datos para registrarse en el sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 11)(14, "form", 12);
        \u0275\u0275listener("ngSubmit", function RegistroComponent_Template_form_ngSubmit_14_listener() {
          return ctx.registrar();
        });
        \u0275\u0275elementStart(15, "div")(16, "label", 13);
        \u0275\u0275text(17, "Nombre completo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 14);
        \u0275\u0275template(19, RegistroComponent_Conditional_19_Template, 3, 2, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div")(21, "label", 16);
        \u0275\u0275text(22, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 17);
        \u0275\u0275template(24, RegistroComponent_Conditional_24_Template, 3, 2, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div")(26, "label", 18);
        \u0275\u0275text(27, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 19);
        \u0275\u0275template(29, RegistroComponent_Conditional_29_Template, 3, 2, "p", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, RegistroComponent_Conditional_30_Template, 6, 1, "div", 20);
        \u0275\u0275elementStart(31, "button", 21);
        \u0275\u0275template(32, RegistroComponent_Conditional_32_Template, 4, 0)(33, RegistroComponent_Conditional_33_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 22)(35, "p", 23);
        \u0275\u0275text(36, " \xBFYa tiene cuenta? ");
        \u0275\u0275elementStart(37, "a", 24);
        \u0275\u0275text(38, "Inicie sesi\xF3n");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(14);
        \u0275\u0275property("formGroup", ctx.formulario);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(19, ((tmp_1_0 = ctx.formulario.get("nombre")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.formulario.get("nombre")) == null ? null : tmp_1_0.errors) ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ((tmp_2_0 = ctx.formulario.get("correoElectronico")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.formulario.get("correoElectronico")) == null ? null : tmp_2_0.errors) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(29, ((tmp_3_0 = ctx.formulario.get("contrasena")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.formulario.get("contrasena")) == null ? null : tmp_3_0.errors) ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.errorServidor ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.formulario.invalid || ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275conditional(32, ctx.cargando ? 32 : 33);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroComponent, { className: "RegistroComponent", filePath: "src\\app\\componentes\\autenticacion\\registro\\registro.component.ts", lineNumber: 88 });
})();
export {
  RegistroComponent
};
//# sourceMappingURL=chunk-AQ3ESMIL.js.map

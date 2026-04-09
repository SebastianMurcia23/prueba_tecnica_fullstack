import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {
  Producto,
  CategoriaProducto,
  EstadoProducto,
  ETIQUETAS_CATEGORIA,
  ETIQUETAS_ESTADO,
} from '../../../core/modelos/producto.modelo';

/**
 * Componente de Formulario de Producto.
 * Formulario reactivo para crear y editar productos.
 * Reutilizable: se adapta según si recibe un producto (edición) o no (creación).
 */
@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formulario" (ngSubmit)="enviar()" class="space-y-5">
      <!-- Fila 1: Nombre + SKU -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="nombre" class="input-etiqueta">Nombre del producto *</label>
          <input id="nombre" type="text" formControlName="nombre" class="input-campo" placeholder="Ej: Semilla de Maíz Híbrido">
          @if (f['nombre'].touched && f['nombre'].errors) {
            <p class="input-error">
              @if (f['nombre'].errors?.['required']) { El nombre es obligatorio. }
              @if (f['nombre'].errors?.['minlength']) { Mínimo 3 caracteres. }
            </p>
          }
        </div>
        <div>
          <label for="sku" class="input-etiqueta">Código SKU *</label>
          <input id="sku" type="text" formControlName="sku" class="input-campo uppercase" placeholder="Ej: SEM-MAIZ-001">
          @if (f['sku'].touched && f['sku'].errors) {
            <p class="input-error">
              @if (f['sku'].errors?.['required']) { El SKU es obligatorio. }
              @if (f['sku'].errors?.['pattern']) { Solo letras mayúsculas, números y guiones. }
            </p>
          }
        </div>
      </div>

      <!-- Descripción -->
      <div>
        <label for="descripcion" class="input-etiqueta">Descripción *</label>
        <textarea
          id="descripcion"
          formControlName="descripcion"
          class="input-campo min-h-[80px] resize-y"
          placeholder="Describa el producto con al menos 10 caracteres..."
          rows="3"
        ></textarea>
        @if (f['descripcion'].touched && f['descripcion'].errors) {
          <p class="input-error">
            @if (f['descripcion'].errors?.['required']) { La descripción es obligatoria. }
            @if (f['descripcion'].errors?.['minlength']) { Mínimo 10 caracteres. }
          </p>
        }
      </div>

      <!-- Fila 2: Precio + Cantidad -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="precio" class="input-etiqueta">Precio (COP) *</label>
          <input id="precio" type="number" formControlName="precio" class="input-campo" placeholder="0" min="0">
          @if (f['precio'].touched && f['precio'].errors) {
            <p class="input-error">
              @if (f['precio'].errors?.['required']) { El precio es obligatorio. }
              @if (f['precio'].errors?.['min']) { El precio no puede ser negativo. }
            </p>
          }
        </div>
        <div>
          <label for="cantidad" class="input-etiqueta">Cantidad en stock *</label>
          <input id="cantidad" type="number" formControlName="cantidad" class="input-campo" placeholder="0" min="0">
          @if (f['cantidad'].touched && f['cantidad'].errors) {
            <p class="input-error">
              @if (f['cantidad'].errors?.['required']) { La cantidad es obligatoria. }
              @if (f['cantidad'].errors?.['min']) { La cantidad no puede ser negativa. }
            </p>
          }
        </div>
      </div>

      <!-- Fila 3: Categoría + Estado -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="categoria" class="input-etiqueta">Categoría *</label>
          <select id="categoria" formControlName="categoria" class="input-campo">
            <option value="" disabled>Seleccione una categoría</option>
            @for (cat of categorias; track cat.valor) {
              <option [value]="cat.valor">{{ cat.etiqueta }}</option>
            }
          </select>
          @if (f['categoria'].touched && f['categoria'].errors) {
            <p class="input-error">Seleccione una categoría.</p>
          }
        </div>
        <div>
          <label for="estado" class="input-etiqueta">Estado</label>
          <select id="estado" formControlName="estado" class="input-campo">
            @for (est of estados; track est.valor) {
              <option [value]="est.valor">{{ est.etiqueta }}</option>
            }
          </select>
        </div>
      </div>

      <!-- URL imagen (opcional) -->
      <div>
        <label for="imagenUrl" class="input-etiqueta">URL de imagen (opcional)</label>
        <input id="imagenUrl" type="url" formControlName="imagenUrl" class="input-campo" placeholder="https://ejemplo.com/imagen.jpg">
      </div>

      <!-- Botones -->
      <div class="flex items-center justify-end gap-3 pt-4 border-t border-superficie-800">
        <button type="button" class="btn-secundario" (click)="alCancelar.emit()">
          Cancelar
        </button>
        <button
          type="submit"
          class="btn-primario"
          [disabled]="formulario.invalid || cargando"
        >
          @if (cargando) {
            <svg class="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            Guardando...
          } @else {
            {{ producto ? 'Actualizar' : 'Crear' }} Producto
          }
        </button>
      </div>
    </form>
  `,
})
export class FormularioProductoComponent implements OnInit {
  @Input() producto: Producto | null = null;
  @Input() cargando = false;
  @Output() alGuardar = new EventEmitter<Partial<Producto>>();
  @Output() alCancelar = new EventEmitter<void>();

  formulario!: FormGroup;

  categorias = Object.values(CategoriaProducto).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_CATEGORIA[v],
  }));

  estados = Object.values(EstadoProducto).map((v) => ({
    valor: v,
    etiqueta: ETIQUETAS_ESTADO[v],
  }));

  get f() {
    return this.formulario.controls;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [this.producto?.nombre || '', [Validators.required, Validators.minLength(3)]],
      descripcion: [this.producto?.descripcion || '', [Validators.required, Validators.minLength(10)]],
      precio: [this.producto?.precio || 0, [Validators.required, Validators.min(0)]],
      cantidad: [this.producto?.cantidad || 0, [Validators.required, Validators.min(0)]],
      categoria: [this.producto?.categoria || '', [Validators.required]],
      sku: [this.producto?.sku || '', [Validators.required, Validators.pattern(/^[A-Z0-9\-]+$/)]],
      estado: [this.producto?.estado || EstadoProducto.ACTIVO],
      imagenUrl: [this.producto?.imagenUrl || ''],
    });
  }

  enviar(): void {
    if (this.formulario.invalid) {
      Object.keys(this.formulario.controls).forEach((key) => {
        this.formulario.get(key)?.markAsTouched();
      });
      return;
    }
    this.alGuardar.emit(this.formulario.value);
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

/**
 * Enumeración de roles de usuario en el sistema.
 */
export enum RolUsuario {
  ADMINISTRADOR = 'administrador',
  USUARIO = 'usuario',
}

/**
 * Tipo de documento Mongoose para Usuario.
 */
export type UsuarioDocumento = Usuario & Document;

/**
 * Entidad Usuario - Esquema para la colección de usuarios del sistema.
 * Incluye hash automático de contraseña mediante hook pre-save.
 */
@Schema({
  collection: 'usuarios',
  timestamps: {
    createdAt: 'fechaCreacion',
    updatedAt: 'fechaActualizacion',
  },
  versionKey: false,
})
export class Usuario {
  @Prop({
    required: true,
    trim: true,
    minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
    maxlength: [100, 'El nombre no puede exceder 100 caracteres'],
  })
  nombre: string;

  @Prop({
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'El correo electrónico no tiene un formato válido'],
    index: true,
  })
  correoElectronico: string;

  @Prop({
    required: true,
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
  })
  contrasena: string;

  @Prop({
    required: true,
    enum: RolUsuario,
    default: RolUsuario.USUARIO,
  })
  rol: RolUsuario;

  fechaCreacion?: Date;
  fechaActualizacion?: Date;
}

export const UsuarioEsquema = SchemaFactory.createForClass(Usuario);

/**
 * Hook pre-save: Hashea la contraseña automáticamente antes de guardar
 * si ha sido modificada. Utiliza bcrypt con factor de costo 12.
 */
UsuarioEsquema.pre<UsuarioDocumento>('save', async function (next) {
  if (!this.isModified('contrasena')) {
    return next();
  }
  try {
    const sal = await bcrypt.genSalt(12);
    this.contrasena = await bcrypt.hash(this.contrasena, sal);
    next();
  } catch (error) {
    next(error as Error);
  }
});

/**
 * Método de instancia para comparar contraseña en texto plano
 * contra el hash almacenado.
 */
UsuarioEsquema.methods.compararContrasena = async function (
  contrasenaPlana: string,
): Promise<boolean> {
  return bcrypt.compare(contrasenaPlana, this.contrasena);
};

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocumento } from '../entidades/usuario.entidad';
import { IUsuarioRepositorio } from './usuario.repositorio.interfaz';

/**
 * Implementación concreta del repositorio de usuarios usando Mongoose.
 * Gestiona la persistencia de datos de usuarios en MongoDB.
 */
@Injectable()
export class UsuarioRepositorio implements IUsuarioRepositorio {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModelo: Model<UsuarioDocumento>,
  ) {}

  /** @inheritdoc */
  async crear(datosUsuario: Partial<UsuarioDocumento>): Promise<UsuarioDocumento> {
    const nuevoUsuario = new this.usuarioModelo(datosUsuario);
    return nuevoUsuario.save();
  }

  /** @inheritdoc */
  async buscarPorCorreo(correo: string): Promise<UsuarioDocumento | null> {
    return this.usuarioModelo
      .findOne({ correoElectronico: correo.toLowerCase() })
      .exec();
  }

  /** @inheritdoc */
  async buscarPorId(id: string): Promise<UsuarioDocumento | null> {
    return this.usuarioModelo
      .findById(id)
      .select('-contrasena')
      .exec();
  }
}

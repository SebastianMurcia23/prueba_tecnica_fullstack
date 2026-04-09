import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { RolUsuario } from '../entidades/usuario.entidad';

/**
 * DTO para el registro de nuevos usuarios.
 * Incluye validaciones estrictas con mensajes en español.
 */
export class RegistrarUsuarioDto {
  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Juan Carlos Pérez',
    minLength: 2,
    maxLength: 100,
  })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  @MaxLength(100, { message: 'El nombre no puede exceder 100 caracteres.' })
  @Transform(({ value }) => value?.trim())
  nombre: string;

  @ApiProperty({
    description: 'Correo electrónico único del usuario',
    example: 'juan.perez@empresa.com',
  })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  correoElectronico: string;

  @ApiProperty({
    description: 'Contraseña segura (mínimo 6 caracteres)',
    example: 'MiContrasenaSegura123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  @MaxLength(50, { message: 'La contraseña no puede exceder 50 caracteres.' })
  contrasena: string;

  @ApiPropertyOptional({
    description: 'Rol del usuario en el sistema',
    enum: RolUsuario,
    default: RolUsuario.USUARIO,
  })
  @IsOptional()
  @IsEnum(RolUsuario, {
    message: `El rol debe ser uno de los siguientes: ${Object.values(RolUsuario).join(', ')}.`,
  })
  rol?: RolUsuario;
}

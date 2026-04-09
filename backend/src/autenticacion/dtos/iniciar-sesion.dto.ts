import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

/**
 * DTO para el inicio de sesión de usuarios.
 */
export class IniciarSesionDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'admin@gestion-productos.com',
  })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
  @Transform(({ value }) => value?.toLowerCase().trim())
  correoElectronico: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'MiContrasena123',
    minLength: 6,
  })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  contrasena: string;
}

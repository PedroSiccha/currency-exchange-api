import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterUserDtos {
      
      @IsNotEmpty()
      @IsString()
      name: string;

      @IsNotEmpty()
      @IsString()
      @IsEmail()
      email: string;

      @IsNotEmpty()
      @IsString()
      @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
      password: string;
      
}
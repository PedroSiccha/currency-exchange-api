import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDtos } from './dtos/register-user.dto';
import { LoginAuthDto } from './dtos/login-auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
      constructor(
            @InjectRepository(User) private usersRepository: Repository<User>
      ) {}
      async register(user: RegisterUserDtos) {
            const emailExist = await this.usersRepository.findOneBy({
                  email: user.email
            });
            if (emailExist) {
                  return new HttpException('Correo ya registrado', HttpStatus.CONFLICT);
            }
            const newUser = this.usersRepository.create(user);
            return this.usersRepository.save(newUser);
      }

      async login(loginData: LoginAuthDto) {
            const { email, password } = loginData;
            const userFound = await this.usersRepository.findOneBy({
                  email: email
            });
            if (!userFound) {
                  return new HttpException('El correo no existe', HttpStatus.NOT_FOUND);
            }
            const isPasswordValid = await compare(password, userFound.password);
            if (!isPasswordValid) {
                  return new HttpException('La contraseña es incorrecta', HttpStatus.FORBIDDEN);
            }
            return userFound;
      }
}

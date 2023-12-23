import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDtos } from './dtos/register-user.dto';

@Injectable()
export class AuthService {
      constructor(
            @InjectRepository(User) private usersRepository: Repository<User>
      ) {}
      register(user: RegisterUserDtos) {
            const newUser = this.usersRepository.create(user);
            return this.usersRepository.save(newUser);
      }
}

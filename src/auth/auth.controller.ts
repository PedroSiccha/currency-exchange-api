import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDtos } from './dtos/register-user.dto';

@Controller('auth')
export class AuthController {
      constructor(
            private authService: AuthService
      ) {}

      @Post('register')
      register(
            @Body() user: RegisterUserDtos
      ) {
            return this.authService.register(user);
      }
}

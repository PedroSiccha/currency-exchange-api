import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDtos } from './dtos/register-user.dto';
import { LoginAuthDto } from './dtos/login-auth.dto';

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

      @Post('login')
      login(
            @Body() loginData: LoginAuthDto
      ) {
            return this.authService.login(loginData);
      }
}

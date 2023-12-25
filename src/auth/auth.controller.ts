import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDtos } from './dtos/register-user.dto';
import { LoginAuthDto } from './dtos/login-auth.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
      constructor(
            private authService: AuthService
      ) {}

      @Post('register')
      @ApiOperation({
            description: 'Crear un usuario'
      })
      @ApiBody({
            description: 'Body Register',
            type: RegisterUserDtos
      })
      register(
            @Body() user: RegisterUserDtos
      ) {
            return this.authService.register(user);
      }

      @Post('login')
      @ApiOperation({
            description: 'Inicio de Sesion'
      })
      @ApiBody({
            description: 'Body Login',
            type: LoginAuthDto
      })
      login(
            @Body() loginData: LoginAuthDto
      ) {
            return this.authService.login(loginData);
      }
}

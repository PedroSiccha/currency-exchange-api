import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {

      constructor(private userService: UsersService) {}

      @Post()
      @ApiOperation({
            description: 'Crear un usuario'
      })
      @ApiBody({
            description: 'Body Register',
            type: CreateUserDto
      })
      create(
            @Body() user: CreateUserDto
      ) {
            return this.userService.create(user);
      }
}

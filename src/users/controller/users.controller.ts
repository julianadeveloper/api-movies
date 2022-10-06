import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiProperty,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { createUser } from '../../auth/dto/users/create-user.dto';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { updateUser } from '../../auth/dto/users/update-user.dto';
import { findUser } from '../api-doc/find-user';
import { User } from '../entitys/user';
import { UsersService } from '../services/users.service';
import { deleteUser } from '../api-doc/delete-user';
@ApiBearerAuth('JWT-auth')
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async listUsers(usersList: User): Promise<User[]> {
    try {
      return await this.userService.listUsers(usersList);
    } catch {
      0;
      new Error();
    }
  }

  @ApiQuery({ type: findUser })
  @Get('/search')
  async findOne(@Query() query: any): Promise<User> {
    try {
      return await this.userService.findOne(query);
    } catch (error) {
      throw new Error();
    }
  }

  @ApiBody({ type: createUser })
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiBody({ type: updateUser })
  @Put(':id')
  async changeUserCredentials(
    @Param('id') id: string,
    @Body() userUpdate: updateUser,
  ) {
    try {
      return await this.userService.updateUser(id, userUpdate);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiProperty({ type: deleteUser })
  @Delete('/:id')
  async deleteUser(@Query('_id') _id: string) {
    try {
      return await this.userService.deleteUser(_id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}

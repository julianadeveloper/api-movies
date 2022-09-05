/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus, Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { updateUser } from '../../auth/dto/users/update-user.dto';
import { User } from '../entitys/user';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Get()
  async listUsers(usersList: User): Promise<User[]> {
    try {
      return await this.userService.listUsers(usersList);
    } catch {
      0;
      new Error();
    }
  }

  @Get('/findOne')
  async findOne(@Query() query: any): Promise<User> {
    try {
      return await this.userService.findOne(query);
    } catch (error) {
      throw new Error();
    }
  }
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    try {
      return await this.userService.create(user);
    } catch (error) {
      throw new Error();
    }
  }

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
  @Delete('/delete/')
  async deleteUser(@Query('id') id: string) {
    try {
      console.log(id);
      return await this.userService.deleteUser(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  // @Get('/:id')
  // async listUserId(@Param('id') _id: string): Promise<User> {
  //   try {
  //     return await this.userService.listUserId(_id);
  //   } catch (error) {
  //     throw new error();
  //   }
  // }

  // @Get('/:email')
  // async listUserMail(@Param() email: String): Promise<User> {
  //   try {
  //     return await this.userService.listUserMail(email);
  //   } catch (error) {
  //     throw new error();
  //   }
  // }
}

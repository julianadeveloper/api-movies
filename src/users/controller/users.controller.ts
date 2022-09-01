/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { User } from '../entitys/user';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async listUsers(usersList: User): Promise<User[]> {
    try {
      return await this.userService.listUsers(usersList);
    } catch {
      new Error();
    }
  }

  @Get(':id')
  async listUserId(@Param('id') _id: string): Promise<User> {
    try {
      return await this.userService.listUserId(_id);
    } catch (error) {
      throw new error();
    }
  }

  @Get('mail/:email')
  async listUserMail(@Param('email') email: String): Promise<User> {
    try {
      return await this.userService.listUserMail(email);
    } catch (error) {
      throw new error();
    }
  }
}

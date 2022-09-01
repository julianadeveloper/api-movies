/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Query } from '@nestjs/common';
import { User } from '../entitys/user';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get(':id')
  async listUserId(@Param('id') _id: string): Promise<User> {
    try {
      return await this.userService.listUserId(_id);
    } catch (error) {
      throw new error()
    }
  }

}

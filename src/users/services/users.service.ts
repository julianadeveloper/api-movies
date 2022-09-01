/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { User } from 'src/users/entitys/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model <User>,
  ) {}

  async listUserId(_id: String): Promise<User> {
try{

  return await this.userModel.findById(_id, { password: 0 });
}
 catch (error) {
      new error()
    }
  }
}

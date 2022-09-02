/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entitys/user';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async listUsers(usersList: User): Promise<User[]> {
    try {
      return await this.userModel.find(usersList, { password: 0 });
    } catch (error) {
      new error();
    }
  }

  async findOne(query: any){
    const key = Object.keys(query)
    if(!key.length) {
      return new Error()
    }
    const strategies = {
      id: (id: string) => this.findById(id),
      email: (email: string) => this.findByEmail(email),
      // phone: (phone: string) => this.findByPhone(phone)
    }
    return await strategies[key[0]](query[key[0]])
  }

  private async findByEmail(email: string) {
    return await this.userModel.findOne({email})
  }

  private async findById(id: string) {
    return await this.userModel.findById(id)
  }

  // private async findByPhone(phone: string) {
  //   return await this.userModel.findOne({phone})
  // }

  // async listUserId(_id: String): Promise<User> {
  //   try {
  //     return await this.userModel.findById(_id, { password: 0 });
  //   } catch (error) {
  //     new error();
  //   }
  // }

  // async listUserMail(email: String): Promise<User> {
    
  //   try {
  //     return await this.userModel.findOne({email}, { password: 0 });
  //   } catch (error) {
  //     console.log(error, 'erro')
  //     // new error();
  //   }
  // }
}

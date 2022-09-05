import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../users/entitys/user';
import { updateUser } from '../../auth/dto/update-user.dto';

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

  async findOne(query: any) {
    console.log(query)
    const key = Object.keys(query);
    console.log(key, 'key1')

    if (!key.length) {
      return new Error();
    }
    const strategies = {
      id: (id: string) => this.findById(id),
      email: (email: string) => this.findByEmail(email),
      // phone: (phone: string) => this.findByPhone(phone)
    };
    console.log(key, 'key2')
    return await strategies[key[0]](query[key[0]]);
  }

  private async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  private async findById(id: string) {
    return await this.userModel.findById(id);
  }

  async create(user: User): Promise<User> {
    const userFound = await this.userModel.findOne({ email: user.email });
    if (userFound) {
      throw new BadRequestException('Usuario ja existe.');
    }

    user.password = await bcrypt.hash(user.password, 10);

    const userCreate = await await this.userModel.create(user);
    return userCreate;
  }



  async updateUser(id: String, userUpdate: updateUser): Promise<updateUser> {
    if (userUpdate.password) {
      const password = userUpdate.password;
      bcrypt.hash(password, 10);
    }
    try {
    
      const updated = await this.userModel
        .findByIdAndUpdate(id, userUpdate)
        .exec();
      console.log(updated)
      return updated;
  

    } catch (error) {
      throw new NotFoundException();
    }
  }

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
  // 
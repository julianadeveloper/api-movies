import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../users/entitys/user';
import { updateUser } from '../../auth/dto/users/update-user.dto';

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
    const key = Object.keys(query);

    if (!key.length) {
      return new Error();
    }
    const strategies = {
      id: (id: string) => this.findById(id),
      email: (email: string) => this.findByEmail(email),
      // phone: (phone: string) => this.findByPhone(phone)
    };
    console.log(strategies[key[0]],',',(query[key[0]]), 'strategy console')
                  //escolha da funcao  --- //desestruturação da chave que vai constar na query (id ou email)
    return await strategies[key[0]](query[key[0]]);
  }

  private async findByEmail(email: string) {
    try {
     const userFind =  await this.userModel.findOne({ email}); 
     return userFind
    } catch (error) {
      throw new Error();
    }
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
    const userCreate = await this.userModel.create(user);
    try {
      return userCreate;
    } catch {
      throw new HttpException('Erro ao criar usuário', HttpStatus.FORBIDDEN);
    }
  }

  async updateUser(id: String, userUpdate: updateUser): Promise<updateUser> {
    if (userUpdate.password) {
      userUpdate.password =  await bcrypt.hash(userUpdate.password, 10);;
    }

    try {
    
      const updated = await this.userModel
        .findByIdAndUpdate(id, userUpdate)
        .exec();
      console.log(updated, updated.password, 'aqui no updateuser service');
      return updated;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async deleteUser(id: string) {
    try {
      console.log(id, 'service')
      await this.userModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(error);
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

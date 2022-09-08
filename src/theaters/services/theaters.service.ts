import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { updateTheater } from '../dto/theater-dto';
import { Theater } from '../entity/theater-entity';

@Injectable()
export class TheatersService {
  constructor(
    @InjectModel('Theater') private readonly theaterModel: Model<Theater>,
  ) {}

  async getTheaters(theaterList: Theater): Promise<Theater[]> {
    try {
      return await this.theaterModel.find(theaterList);
    } catch (error) {
      new error();
    }
  }
  async findOne(query: any, query2: any) {
    const key = Object.keys(query);
    if (!key.length) {
      return new Error();
    }
    const strategies = {
      id: (id: string) => this.findById(id),
      email: (location: any) => this.findByLocation(location),
      // phone: (phone: string) => this.findByPhone(phone)
    };
    return await strategies[key[0]](query[key[0]]);
    // return await strategies[(key[0], key2[1])](query[key[0]], key2[1]);
  }
  //implementar a rota que busque pela localização - range
  private async findByLocation(location: string) {
    try {
      return await this.theaterModel.find({ location });
    } catch (error) {
      throw new Error();
    }
  }

  private async findById(id: string) {
    return await this.theaterModel.findById(id);
  }

  async create(teather: Theater): Promise<Theater> {
    const userCreate = await this.theaterModel.create(teather);
    try {
      return userCreate;
    } catch {
      throw new HttpException('Erro ao criar usuário', HttpStatus.FORBIDDEN);
    }
  }
  async updateTheater(
    id: string,
    TheaterBody: updateTheater,
  ): Promise<updateTheater> {
    try {
      const updated = await this.theaterModel.findByIdAndUpdate(
        id,
        TheaterBody,
      );
      return updated;
    } catch {
      throw new HttpException('Erro ao alterar dados', HttpStatus.FORBIDDEN);
    }
  }
  async deleteTheater(id: string) {
    try {
      console.log(id);
      await this.theaterModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

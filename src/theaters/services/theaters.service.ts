import {
  ConsoleLogger,
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

  async getTheaters(theaters: Theater, pagination){
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage-1);
      const total = await this.theaterModel.countDocuments(theaters);
      const qtdPages = Math.floor(total / pagination.limit) + 1;
      const content = await this.theaterModel.find(theaters).limit(limit).skip(skip);

      console.log(pagination)
      return {
        content,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1
      }
    } catch {
      new Error('Bad Request');
    }
    } 
  
  async findOne(query: any) {
    const key = Object.keys(query);
    if (!key.length) {
      return new Error();
    }
    const strategies = {
      id: (id: string) => this.findById(id),
    };
    return await strategies[key[0]](query[key[0]]);
  }
  private async findById(id: string) {
    return await this.theaterModel.findById(id);
  }
  //implementar a rota que busque pela localização - range

  ///**Metodo Capturar campos */
  async findFieldsLocation(
    latitude: number,
    longitude: number,
    distance: number,
  ): Promise<Theater[]> {
    try {
      const agg = await this.theaterModel.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [latitude, longitude],
            },
            distanceField: 'Distance',
            maxDistance: distance,
            spherical: true,
          },
        },
      ])
      console.log(latitude, longitude)
      return agg;
    } catch {
      throw new HttpException(
        'FORBIDDEN - Possivelmente não há teatro proximo',
        HttpStatus.FORBIDDEN,
      );
    }
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
        {new: true}
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
  // async buscarproximos(logintude: Theater, latitude: Theater) {
  //   const obj = [
  //     {
  //       $geoNear: {
  //         near: {
  //           coordinates: [logintude, latitude],
  //           type: 'Point',
  //         },
  //         distanceField: 'distance.theaters',
  //         minDistance: 0,
  //         maxDistance: 1000,
  //         spherical: true,
  //       },
  //     },
  //   ];
  //   // const agg = this.theaterModel.aggregate([{data}]);
  //   // const find = await this.theaterModel.findById(id);
  //   // const agg = await (await this.theaterModel.aggregate())
  // }
}

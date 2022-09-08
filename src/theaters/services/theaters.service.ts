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
  ): Promise<Theater[]> {
    const agg = await this.theaterModel.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [latitude, longitude],
          },
          distanceField: 'Distance',
          maxDistance: 1000,
          spherical: true,
        },
      },
    ]);
    console.log(agg);
    return agg;
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

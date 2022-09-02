import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movies } from '../entitys/movies-entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movies') private readonly moviesModel: Model<Movies>,
  ) {}
async getMovies(movies: Movies): Promise<Movies[]>{
  try {
    return await this.moviesModel.find(movies);
  } catch {
    new Error();
  }
}

}

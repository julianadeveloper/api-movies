import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createMoviesDto } from '../dto/create-movie.dto';
import { updateMoviesDto } from '../dto/update-movie.dto';
import { Movies } from '../entitys/movies-entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movies') private readonly moviesModel: Model<Movies>,
  ) {}
  async getMovies(movies: Movies, pagination) {
    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage-1);

      const total = await this.moviesModel.countDocuments(movies);
      const qtdPages =  Math.floor(total / pagination.limit) + 1;


      const content = await this.moviesModel.find(movies).limit(limit).skip(skip);

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
  ///////////finds movies///////////////////
  async findByMovieId(query: { search: string, type: string, page: number, limit: number}){

    const type = query.type || 'title'

    const queryMongo = {
      [type]: {$regex: query.search || '', $options: 'i'}
    } as unknown as Movies
    return this.getMovies(queryMongo, {page: query.page || 1, limit: query.limit || 10})
  
  }

  //create - movies
  async createMovie(movies: createMoviesDto) {
    const moviesCreate = await this.moviesModel.create(movies);
    try {
      return moviesCreate;
    } catch {
      throw new HttpException('Erro ao criar comentário', HttpStatus.FORBIDDEN);
    }
  }

  async updateMovies(
    id: String,
    moviesUpdate: updateMoviesDto,
  ): Promise<updateMoviesDto> {
    try {
      const updated = await this.moviesModel
        .findByIdAndUpdate(id, moviesUpdate, { new: true })
        .exec();
      console.log(updated);
      return updated;
    } catch {
      throw new NotFoundException();
    }
  }

  async deletemovies(id: string) {
    try {
      console.log(id);
      await this.moviesModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}

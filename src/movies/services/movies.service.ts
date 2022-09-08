import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, NullExpression } from 'mongoose';
import { createMoviesDto } from '../dto/create-movie.dto';
import { updateMoviesDto } from '../dto/update-movie.dto';
import { Movies } from '../entitys/movies-entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movies') private readonly moviesModel: Model<Movies>,
  ) {}
  async getMovies(movies: Movies): Promise<Movies[]> {
    try {
      return await this.moviesModel.find(movies).limit(20);
    } catch {
      new Error();
    }
  }

  async findByMovieId(id: string): Promise<Movies> {
    return await this.moviesModel.findById(id);
  }

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
        .findByIdAndUpdate(id, moviesUpdate)
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

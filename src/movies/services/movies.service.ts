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
  async getMovies(movies: Movies, pagination) {
    try {
      const total = await this.moviesModel.countDocuments(movies);
      const qtdPages =  Math.floor(total / pagination.limit) + 1;
      const content = await this.moviesModel.find(movies).limit(pagination.limit || 10).skip(pagination.limit*pagination.page || 1);
      return {
        content,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1
      }
    } catch {
      new Error();
    }
  }
  ///////////finds movies///////////////////
  async findByMovieId(query: { search: string, type: string, page: number, limit: number}){
    // const key = Object.keys(query);

    // if (!key.length) {
    //   return
    // }
    // {
    //   type: 'genres',
    //   search: 'drama'
    // }
    // const strategies = {
    //   id: (id: string) => this.findById(id),
    //   // email: (email: string) => this.findByEmail(email),
    //   title: (title: string) => this.findByTitle(title),
    //   genres: (genres: string) => this.findByGenre(genres),
    //   year: (year: number) => this.findByYear(year),
    //   type: (type: string) => this.findByType(type),
    //   director: (director: string) => this.findByDirector(director),

    //   // phone: (phone: string) => this.findByPhone(phone)
    // };

    const type = query.type || 'title'

    const queryMongo = {
      [type]: {$regex: query.search || '', $options: 'i'}
    } as unknown as Movies

    return this.getMovies(queryMongo, {page: query.page || 1, limit: query.limit || 10})
    // const strategy = strategies[query.type] || strategies.title;
    // return strategy(query.search);
    // console.log(strategies[], ',', query[key[0]], 'strategy console');
    //escolha da funcao  --- //desestruturação da chave que vai constar na query (id ou email)
    // return await strategies[key[0]](query[key[0]]);
  }

  private async findById(id: string) {
    return await this.moviesModel.findById(id).limit(10).skip(2)  ;
  }
  private async findByTitle(title: string) {
    return await this.moviesModel.find({ title }).limit(10).skip(2);
  }
  private async findByGenre(genres: string) {
    return await this.moviesModel.find({ genres }).limit(10).skip(2);
  }
  private async findByYear(year: number) {
    return await this.moviesModel.find({ year }).limit(10).skip(2);
  }
  private async findByType(type: string) {
    return await this.moviesModel.find({ type }).limit(10).skip(2);
  }

  private async findByDirector(director: string) {
    return await this.moviesModel.find({ director }).limit(10).skip(2);
  }
  ///////////////////////////////////////////////////////////////////////

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

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus, Post,
  Query
} from '@nestjs/common';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { createMoviesDto } from '../dto/create-movie.dto';
import { Movies } from '../entitys/movies-entity';
import { MoviesService } from '../services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSevice: MoviesService) {}

  @Get()
  async getAllMovies(movies: Movies): Promise<Movies[]> {
    return await this.moviesSevice.getMovies(movies);
  }

  @Get('/id')
  async findOne(@Query('id') id: string): Promise<Movies> {
    try {
      return await this.moviesSevice.findByMovieId(id);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  @IsPublic()
  @Post()
  async createMovies(@Body() movie: createMoviesDto) {
    try {
      return await this.moviesSevice.createMovie(movie);
    } catch (error) {
      console.log(error);
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
}

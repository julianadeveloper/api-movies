import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
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
      const findOne = await this.moviesSevice.findByMovieId(id);
      return findOne;
    } catch {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @IsPublic()
  @Post()
  async createMovies(@Body() movie: createMoviesDto) {
    try {
      return await this.moviesSevice.createMovie(movie);
    } catch {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }

  @Delete('/:id')
  async deleteMovie(@Param('id') id: string) {
    const deleted = await this.moviesSevice.deletemovies(id);
    try {
      return deleted;
    } catch {
      throw new HttpException('NOT_DELETED', HttpStatus.NOT_FOUND);
    }
  }
}

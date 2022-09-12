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
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { MoviesCreateApi } from '../api-doc/create-swagger';
import { createMoviesDto } from '../dto/create-movie.dto';
import { Movies } from '../entitys/movies-entity';
import { MoviesService } from '../services/movies.service';

@ApiBearerAuth('JWT-auth')
@ApiTags('Movies')
@Controller('Movies')
export class MoviesController {
  constructor(private readonly moviesSevice: MoviesService) {}

  @ApiBody({ type: [Movies] })
  @Get()
  async getAllMovies(movies: Movies): Promise<Movies[]> {
    return await this.moviesSevice.getMovies(movies);
  }
  @ApiBody({ type: Movies })
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
  @ApiBody({ type: MoviesCreateApi })
  @Post()
  async createMovies(@Body() movie: createMoviesDto) {
    try {
      return await this.moviesSevice.createMovie(movie);
    } catch {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiBody({ type: Movies })
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

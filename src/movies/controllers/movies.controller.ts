/*
 */

import { Controller, Get } from '@nestjs/common';
import { Movies } from '../entitys/movies-entity';
import { MoviesService } from '../services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSerivce: MoviesService) {}

@Get()
async getAllMovies(movies: Movies): Promise<Movies[]>{
  return await this.moviesSerivce.getMovies(movies)
}

}

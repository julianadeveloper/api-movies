/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MoviesController } from '../controllers/movies.controller';
import { MoviesService } from '../services/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

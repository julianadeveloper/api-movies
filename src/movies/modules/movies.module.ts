/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from '../controllers/movies.controller';
import { MoviesSchema } from '../schema/movies-schema';
import { MoviesService } from '../services/movies.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Movies', schema: MoviesSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

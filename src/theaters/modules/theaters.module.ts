/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TheatersController } from '../controller/theaters.controller';
import { TheaterSchema } from '../schema/theater';
import { TheatersService } from '../services/theaters.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Theater', schema: TheaterSchema }])],
  controllers: [TheatersController],
  providers: [TheatersService],
})
export class TheatersModule {}

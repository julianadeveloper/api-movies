/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TheatersController } from '../controller/theaters.controller';
import { TheatersService } from '../services/theaters.service';

@Module({
  imports: [],
  controllers: [TheatersController],
  providers: [TheatersService],
})
export class TheatersModule {}

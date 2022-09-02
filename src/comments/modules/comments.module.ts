/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsController } from '../controller/comments.controller';
import { CommentsSchema } from '../schemas/comments-schema';
import { CommentsService } from '../services/comments.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Comments', schema: CommentsSchema }])],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],

})
export class CommentsModule {}

/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CommentsController } from '../controller/comments.controller';
import { CommentsService } from '../services/comments.service';

@Module({
  imports: [],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}

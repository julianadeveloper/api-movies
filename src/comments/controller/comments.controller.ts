/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { Comments } from '../entitys/comments-entity';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
constructor(private readonly commentsService: CommentsService){}

@Get()
async getComments(comments: Comments): Promise<Comments[]>{
  return await this.commentsService.getComments(comments)
}

@Get(':id')
async getCommentById(@Param('id') id: Comments): Promise<Comments>{
  return await this.commentsService.getCommentById(id)
}

  
}

/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from '../entitys/comments-entity';

@Injectable()
export class CommentsService {
constructor(@InjectModel('Comments') private readonly commentsModel: Model<Comments>){}


async getComments(comments: Comments): Promise<Comments[]>{
    return await this.commentsModel.find(comments)
  }
async getCommentById(_id: Comments): Promise<Comments>{
  return await this.commentsModel.findById(_id)
}
}

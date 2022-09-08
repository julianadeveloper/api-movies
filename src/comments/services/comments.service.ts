/*
https://docs.nestjs.com/providers#services
*/

import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentsDtoCreate } from '../dto/comment-create-dto';
import { CommentsDtoUpdate } from '../dto/comment-dto';
import { Comments } from '../entitys/comments-entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('Comments') private readonly commentsModel: Model<Comments>,
  ) {}

  async getComments(comments: Comments): Promise<Comments[]> {
    return await this.commentsModel.find(comments).limit(10);
  }

  async findOne(query: string) {
    const key = Object.keys(query);

    if (!key.length) {
      return new Error();
    }
    const strategies = {
      id: (id: string) => this.findById(id),
      movie_id: (movie_id: string) => this.findByMovieId(movie_id),
    };
    return await strategies[key[0]](query[key[0]]);
  }

  private async findByMovieId(movie_id: string) {
    try {
      return await this.commentsModel.find({ movie_id }).limit(10);
    } catch {
      throw new Error();
    }
  }

  private async findById(id: string) {
    return await this.commentsModel.findById(id);
  }
  async create(comments: CommentsDtoCreate): Promise<CommentsDtoCreate> {
    const commentsCreate = await this.commentsModel.create(comments);
    try {
      return commentsCreate;
    } catch {
      throw new HttpException('Erro ao criar comentário', HttpStatus.FORBIDDEN);
    }
  }

  async updateComments(
    id: String,
    commentsUpdate: CommentsDtoUpdate,
  ): Promise<CommentsDtoUpdate> {
    try {
      const updated = await this.commentsModel
        .findByIdAndUpdate(id, commentsUpdate)
        .exec();
      console.log(updated);
      return updated;
    } catch {
      throw new NotFoundException();
    }
  }

  async deleteComments(id: string) {
    try {
      console.log(id)
      await this.commentsModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}


import {
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

  async getComments(comments: Comments, pagination){

    try {
      const limit = pagination.limit || 10;
      const currentPage = pagination.page || 1;
      const skip = limit * (currentPage-1);
      const total = await this.commentsModel.countDocuments(comments);
      const qtdPages = Math.floor(total / pagination.limit) + 1;
      const content = await this.commentsModel.find(comments).limit(limit).skip(skip);
      return {
        content,
        numberOfElements: total,
        pagesTotal: qtdPages,
        page: pagination.page || 1
      }
    } catch {
      new Error('Bad Request');
    }
  }

  async findOne(query: {search: string, page: number, limit: number}) {
    const queryMongo = {
      email: {$regex: query.search || '', $options: 'i'}
    } as unknown as Comments;
    console.log(queryMongo)
      return this.getComments(queryMongo, {page: query.page || 1, limit: query.limit || 10})

    }
  

    // const key = Object.keys(query);
    
    // if (!key.length) {
    //   return new Error();
    // }
    // const strategies = {
    //   id: (id: string) => this.findById(id),
    //   email: (email: string) => this.findByMovieEmail(email),
    // };
    // return await strategies[key[0]](query[key[0]]);
  

  // private async findByMovieEmail(email: string) {
  //   try {
  //     return await this.commentsModel.find({ email })
  //   } catch {
  //     throw new Error();
  //   }
  // }

  // private async findById(id: string) {
  //   return await this.commentsModel.findById(id);
  // }
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
        .findByIdAndUpdate(id, commentsUpdate, {new: true})
        .exec();
      console.log(updated);
      return updated;
    } catch {
      throw new NotFoundException();
    }
  }

  async deleteComments(id: string) {
    try {
      await this.commentsModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new NotFoundException(error);
    } 
  }
}

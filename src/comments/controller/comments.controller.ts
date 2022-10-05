import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { deleteComment } from '../api-doc/delete';
import { findComment } from '../api-doc/find';
import { CommentsDtoCreate } from '../dto/comment-create-dto';
import { CommentsDtoUpdate } from '../dto/comment-dto';
import { Comments } from '../entitys/comments-entity';
import { CommentsService } from '../services/comments.service';
@ApiTags('Comments')
@ApiBearerAuth('JWT-auth')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @IsPublic()
  @Get()
  async getComments(@Query()comments: Comments){
    return await this.commentsService.getComments(comments, {});
  }

  @ApiQuery({ type: findComment })
  @IsPublic()
  @Get('/search')
  async findOne(@Query() query){
    try {
      return await this.commentsService.findOne(query);
    } catch (error){
      throw new Error(error);
    }
  }

  @ApiBody({ type: CommentsDtoCreate })
  @Post()
  async createComments(@Body() comments: Comments): Promise<CommentsDtoCreate> {
    try {
      return await this.commentsService.create(comments);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiBody({ type: CommentsDtoUpdate })
  @Put(':id')
  async changecommentsCredentials(
    @Param('id') id: string,
    @Body() commentsUpdate: CommentsDtoUpdate,
  ): Promise<CommentsDtoUpdate> {
    try {
      return await this.commentsService.updateComments(id, commentsUpdate);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiQuery({ type: deleteComment })
  @Delete('/:id')
  async deletecomments(@Query() id: string) {
    try {
      return await this.commentsService.deleteComments(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}

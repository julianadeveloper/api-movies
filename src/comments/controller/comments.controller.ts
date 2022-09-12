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
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { deleteComment } from '../api-doc/delete';
import { findComment } from '../api-doc/find';
import { CommentsDtoCreate } from '../dto/comment-create-dto';
import { CommentsDtoUpdate } from '../dto/comment-dto';
import { Comments } from '../entitys/comments-entity';
import { CommentsService } from '../services/comments.service';
@ApiTags('Commments')
@ApiBearerAuth('JWT-auth')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @ApiBody({ type: Comments })
  @Get()
  async getComments(comments: Comments): Promise<Comments[]> {
    return await this.commentsService.getComments(comments);
  }

  @ApiBody({ type: findComment })
  @Get('/find')
  async findOne(@Query() query: string): Promise<Comments> {
    try {
      return await this.commentsService.findOne(query);
    } catch {
      throw new Error();
    }
  }

  @IsPublic()
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
  ) {
    try {
      return await this.commentsService.updateComments(id, commentsUpdate);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
  @ApiBody({ type: deleteComment })
  @Delete('/delete')
  async deletecomments(@Query('id') id: string) {
    try {
      return await this.commentsService.deleteComments(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CommentsDtoCreate {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  movie_id: string;
  @ApiProperty()
  text: string;
  @ApiProperty()
  date: string;
}

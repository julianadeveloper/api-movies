import { ApiProperty } from '@nestjs/swagger';

export class CommentsDtoUpdate {
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

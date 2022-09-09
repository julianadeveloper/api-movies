import { ApiProperty } from '@nestjs/swagger';

export class Comments {
  constructor(Comments?: Partial<Comments>) {
    this.name = Comments?.name;
    this.email = Comments?.email;
    this.movie_id = Comments?.movie_id;
    this.text = Comments?.text;
    this.date = Comments.date;
  }
  @ApiProperty({})
  name: string;
  email: string;
  @ApiProperty({})
  movie_id: string;
  text: string;
  date: string;
}

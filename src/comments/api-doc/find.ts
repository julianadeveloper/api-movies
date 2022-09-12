import { ApiProperty } from '@nestjs/swagger';

export class findComment {
  @ApiProperty({example: "Movie_id ou Id do comentário"})
  id?: string;
}

import { ApiProperty } from "@nestjs/swagger";

export class sessionDto {
  @ApiProperty()
  user_id: string;
  jwt: string;
}

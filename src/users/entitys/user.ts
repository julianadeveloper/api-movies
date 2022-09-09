import { ApiProperty } from "@nestjs/swagger";

export class User {
  _id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}

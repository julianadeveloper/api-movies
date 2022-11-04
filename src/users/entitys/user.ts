import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class User {
  _id?: string;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  role: string;
}

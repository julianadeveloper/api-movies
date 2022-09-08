import {  IsNotEmpty, IsString } from "class-validator";

export class CommentsDtoCreate {
  @IsNotEmpty()
  @IsString()
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
}

import {  IsString } from "class-validator";

export class CommentsDtoUpdate {
  @IsString()
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
}

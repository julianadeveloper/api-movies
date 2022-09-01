/* eslint-disable prettier/prettier */
import mongoose, * as moongose from 'mongoose';
import { Theater } from '../entity/theater-entity';

export const TheaterShema = new moongose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

export type UserDocument = Theater & mongoose.Document;

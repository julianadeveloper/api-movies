/* eslint-disable prettier/prettier */
import mongoose, * as moongose from 'mongoose';
import { User } from '../entitys/user';

export const UserSchema = new moongose.Schema({
  name: String,
  email: String,
  password: String,
});

export type UserDocument = User & mongoose.Document;

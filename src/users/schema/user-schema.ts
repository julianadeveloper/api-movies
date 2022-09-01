/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, * as moongose from 'mongoose';
import { User } from '../entitys/user';

export const UserSchema = new moongose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

export type UserDocument = User & mongoose.Document;

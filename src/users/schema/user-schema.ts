/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, * as moongose from 'mongoose';
import { User } from '../entitys/user';

export const UserSchema = new moongose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
});

export type UserDocument = User & mongoose.Document;

export const MyUserSchema = SchemaFactory.createForClass(User)
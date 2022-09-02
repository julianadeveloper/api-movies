import mongoose from 'mongoose';
import { User } from '../entitys/user';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
}>;
export declare type UserDocument = User & mongoose.Document;

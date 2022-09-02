import mongoose from 'mongoose';
import { User } from '../entitys/user';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    email?: string;
    password?: string;
    username?: string;
}>;
export declare type UserDocument = User & mongoose.Document;
export declare const MyUserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;

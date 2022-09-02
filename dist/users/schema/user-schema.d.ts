import mongoose from 'mongoose';
import { User } from '../entitys/user';
<<<<<<< HEAD
export declare const UserSchema: any;
=======
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    email?: string;
    password?: string;
}>;
>>>>>>> feature/movies
export declare type UserDocument = User & mongoose.Document;

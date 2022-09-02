import mongoose from 'mongoose';
import { Comments } from '../entitys/comments-entity';
export declare const CommentsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    email?: string;
    text?: string;
    date?: string;
}>;
export declare type CommentsDocument = Comments & mongoose.Document;

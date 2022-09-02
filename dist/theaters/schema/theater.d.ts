import mongoose from 'mongoose';
import { Theater } from '../entity/theater-entity';
export declare const TheaterShema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    location: any[];
    thaterId?: string;
}>;
export declare type ThaterDocument = Theater & mongoose.Document;

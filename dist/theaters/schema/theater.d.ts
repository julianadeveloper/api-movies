import mongoose from 'mongoose';
import { Theater } from '../entity/theater-entity';
<<<<<<< HEAD
export declare const TheaterShema: any;
=======
export declare const TheaterShema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    location: any[];
    thaterId?: string;
}>;
>>>>>>> feature/movies
export declare type ThaterDocument = Theater & mongoose.Document;

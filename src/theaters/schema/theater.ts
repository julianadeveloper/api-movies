/* eslint-disable prettier/prettier */
import mongoose, * as moongose from 'mongoose';
import { Theater } from '../entity/theater-entity';

export const TheaterShema = new moongose.Schema({
thaterId: String,
location: Array,
});

export type ThaterDocument = Theater & mongoose.Document;

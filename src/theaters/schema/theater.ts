/* eslint-disable prettier/prettier */
import mongoose, * as moongose from 'mongoose';
import { Theater } from '../entity/theater-entity';

export const TheaterShema = new moongose.Schema({
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
});

export type ThaterDocument = Theater & mongoose.Document;

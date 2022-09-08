/* eslint-disable prettier/prettier */
import mongoose, * as moongose from 'mongoose';
export const TheaterSchema = new mongoose.Schema({
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


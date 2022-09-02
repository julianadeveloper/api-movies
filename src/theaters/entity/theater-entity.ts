import mongoose from "mongoose";

export class Theater {
  constructor(Theater?: Partial<Theater>) {
    this.theaterId = Theater?.theaterId;
    this.location = Theater?.location;
  }

  theaterId: number;
  location: [
    {
      adress: {
        street1: string;
        city: string;
        state: string;
        zipcode:string;
      };
      geo: {
        type:
        {
        type: [String],

        enum: ['Point'],
        required: true;
        },
        coordinates: {
          type: [Number];
          required:true
        }
      };
    },
  ];
}

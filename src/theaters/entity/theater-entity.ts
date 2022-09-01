import mongoose from "mongoose";

export class Theater {
  constructor(Theater?: Partial<Theater>) {
    this._id = Theater?._id;
    this.theaterId = Theater?.theaterId;
    this.location = Theater?.location;
  }

  _id: string;
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

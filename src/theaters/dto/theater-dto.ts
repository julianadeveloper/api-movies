<<<<<<< Updated upstream
export class updateTheater {
  
  theaterId: number;
  location: 
    {
      adress: {
        street1: string;
        city: string;
        state: string;
        zipcode:string;
      },

      geo: {
        type:
        {
        type: [String],
=======
import { ApiProperty } from '@nestjs/swagger';
export class updateTheater {
  @ApiProperty()
  location: {
    adress: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    };
    geo: {
      type: {
        type: [String];
>>>>>>> Stashed changes

        enum: ['Point'],
        required: true;
        }
      },
      coordinates: {
        type: [Number];
        required:true
      }
    }

}

import { ApiProperty } from "@nestjs/swagger";

export class Theater {
  @ApiProperty()
  theaterId: number;
  @ApiProperty()
  location: {
    address: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    },
    geo: {
      type: {
        type: [String];
        enum: ['Point'];
        required: true;
      },
      coordinates: {
        type: [Number];
        required: true;
      }
    }
  };
}

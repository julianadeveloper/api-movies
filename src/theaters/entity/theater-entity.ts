import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmptyObject } from "class-validator";

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
      type: string;
      coordinates: number[];
    };
  };
}

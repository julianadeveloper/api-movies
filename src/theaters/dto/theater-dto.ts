import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyObject } from 'class-validator';
export class updateTheater {
  @ApiProperty({example: "Dados com endereço e coordenadas", description: "Propriedades para atualizar"})
  @IsNotEmptyObject()
  location: {
    address: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    };

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

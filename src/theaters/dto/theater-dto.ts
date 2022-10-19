import { ApiProperty } from '@nestjs/swagger';
export class updateTheater {
  @ApiProperty({example: "Dados com endereço e coordenadas", description: "Propriedades para atualizar"})
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

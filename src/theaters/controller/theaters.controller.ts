import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { DeleteTheater } from '../api-doc/delete';
import { TheaterDistance } from '../api-doc/find-distace';
import { findTheater } from '../api-doc/find-id';
import { updateTheater } from '../dto/theater-dto';
import { Theater } from '../entity/theater-entity';
import { TheatersService } from '../services/theaters.service';

@ApiBearerAuth('JWT-auth')
@ApiTags('Theaters')
@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  // @ApiBody({type: [Theater]})
  @Get()
  async listTheaters(thetater: Theater): Promise<Theater[]> {
    try {
      return await this.theatersService.getTheaters(thetater);
    } catch {
      new Error();
    }
  }
  @ApiQuery({type: findTheater})
  @Get('/findTheater')
  async findOne(@Query() query: any): Promise<Theater> {
    try {
      return await this.theatersService.findOne(query);
    } catch (error) {
      throw new Error();
    }
  }
  @ApiQuery({ type: TheaterDistance })
  @Post('/findDistance')
  async findLocation(@Body() data: any): Promise<Theater[]> {
    try {
      const result = await this.theatersService.findFieldsLocation(
        data.latitude,
        data.longitude,
      );
      return result;
    } catch {
      throw new HttpException(
        'FORBIDDEN - Possivelmente não há teatro proximo',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @IsPublic()
@ApiBody({type: Theater})
  @Post()
  async createTheaters(@Body() teather: Theater): Promise<Theater> {
    try {
      return await this.theatersService.create(teather);
    } catch {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }
@ApiBody({type: updateTheater})
  @Put(':id')
  async updateTheaters(
    @Param('id') id: string,
    @Body() bodyTheater: updateTheater,
  ) {
    try {
      return await this.theatersService.updateTheater(id, bodyTheater);
    } catch (error) {
      throw new HttpException('FORBIDDEN', HttpStatus.NOT_FOUND);
    }
  }
  @ApiBody({type: DeleteTheater})
  @Delete('/:id')
  async deleteTheaters(@Param('id') id: string) {
    try {
      console.log(id);
      return await this.theatersService.deleteTheater(id);
    } catch (error) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}

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
import { IsPublic } from '../../auth/decorators/is-public-decorators';
import { updateTheater } from '../dto/theater-dto';
import { Theater } from '../entity/theater-entity';
import { TheatersService } from '../services/theaters.service';
@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Get()
  async listTheaters(thetater: Theater): Promise<Theater[]> {
    try {
      return await this.theatersService.getTheaters(thetater);
    } catch {
      new Error();
    }
  }
  @Get('/findTheater')
  async findOne(@Query() query: any): Promise<Theater> {
    try {
      return await this.theatersService.findOne(query);
    } catch (error) {
      throw new Error();
    }
  }

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
  @Post()
  async createTheaters(@Body() teather: Theater): Promise<Theater> {
    try {
      return await this.theatersService.create(teather);
    } catch {
      throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }
  }

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

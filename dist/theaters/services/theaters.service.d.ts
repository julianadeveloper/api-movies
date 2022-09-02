import { Model } from 'mongoose';
import { Theater } from '../entity/theater-entity';
export declare class TheatersService {
    private readonly theaterModel;
    constructor(theaterModel: Model<Theater>);
    getTheaters(theaterList: Theater): Promise<Theater[]>;
}

import { TheatersService } from '../services/theaters.service';
import { Theater } from '../entity/theater-entity';
export declare class TheatersController {
    private readonly theatersService;
    constructor(theatersService: TheatersService);
    listTheaters(thetater: Theater): Promise<Theater[]>;
}

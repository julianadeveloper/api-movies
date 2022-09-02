import { Movies } from '../entitys/movies-entity';
import { MoviesService } from '../services/movies.service';
export declare class MoviesController {
    private readonly moviesSerivce;
    constructor(moviesSerivce: MoviesService);
    getAllMovies(movies: Movies): Promise<Movies[]>;
}

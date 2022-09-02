import { Model } from 'mongoose';
import { Movies } from '../entitys/movies-entity';
export declare class MoviesService {
    private readonly moviesModel;
    constructor(moviesModel: Model<Movies>);
    getMovies(movies: Movies): Promise<Movies[]>;
}

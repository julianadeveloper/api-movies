import { Model } from 'mongoose';
import { User } from 'src/entitys/user';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
}

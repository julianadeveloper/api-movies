import { Model } from 'mongoose';
import { User } from 'src/users/entitys/user';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    listUsers(usersList: User): Promise<User[]>;
    listUserId(_id: String): Promise<User>;
    listUserMail(email: String): Promise<User>;
}

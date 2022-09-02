import { User } from '../entitys/user';
import { UsersService } from '../services/users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    listUsers(usersList: User): Promise<User[]>;
    listUserId(_id: string): Promise<User>;
    listUserMail(email: String): Promise<User>;
}

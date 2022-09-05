import { Request } from 'express';
import { User } from '../../users/entitys/user';

export interface AuthRequest extends Request {
  user: User;
}
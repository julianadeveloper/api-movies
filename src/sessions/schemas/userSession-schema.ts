import mongoose, * as moongose from 'mongoose';
import { userSessions } from '../entitys/session-entity';

export const userSessionSchema = new moongose.Schema({
 user_id: String,
 jwt: String,
});

export type SessionDocument = userSessions & mongoose.Document;

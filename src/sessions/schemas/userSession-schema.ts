import mongoose, * as moongose from 'mongoose';
import { Sessions } from '../entitys/session-entity';

export const userSessionSchema = new moongose.Schema({
 user_id: String,
 jwt: String,
});

export type SessionDocument = Sessions & mongoose.Document;

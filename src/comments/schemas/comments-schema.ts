import mongoose, * as moongose from 'mongoose'
import { Comments } from '../entitys/comments-entity'


export const CommentsSchema = new moongose.Schema
({
name: String,
email: String,
text: String,
date: String,
})

export type CommentsDocument = Comments & mongoose.Document;

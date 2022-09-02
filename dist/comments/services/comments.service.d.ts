import { Model } from 'mongoose';
import { Comments } from '../entitys/comments-entity';
export declare class CommentsService {
    private readonly commentsModel;
    constructor(commentsModel: Model<Comments>);
    getComments(comments: Comments): Promise<Comments[]>;
    getCommentById(_id: Comments): Promise<Comments>;
}

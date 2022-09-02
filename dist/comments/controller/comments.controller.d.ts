import { Comments } from '../entitys/comments-entity';
import { CommentsService } from '../services/comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getComments(comments: Comments): Promise<Comments[]>;
    getCommentById(id: Comments): Promise<Comments>;
}

import { Comment } from './comment';
export class Post {
    _id: string;
    created: string;
    updatedAt: string;
    likes: number;
    likesObj: any;
    dislikes: number;
    isLiked: boolean;
    content: string;
    image: string;
    video: string;
    _creator: any;
    comments: Comment[]
}

import { Comment } from './comment';

export class Post {
    id: number;
    published_at: string;
    title: string;
    likes: number;
    dislikes: number;
    comments: number;
    views: number;
    body: string;
    media: string;
};

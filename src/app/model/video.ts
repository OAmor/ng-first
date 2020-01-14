import Comment from 'comment';
import Author from 'author';
export class Video {
    title: string;

    link: string;

    image: string;

    description?: string;

    views?: number;

    recommanded?: boolean;

    new?: boolean;

    date: string;

    likes: number;

    dislikes: number;

    comments?: Array<Comment>;

    author?: Author;
}
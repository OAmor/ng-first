import Comment from './comment';
import Author from './author';
export class Video {
    title: string;

    link: string;

    image: string;

    time?: string;

    description?: string;

    views?: number;

    recommanded?: boolean;

    new?: boolean;

    date: string;

    likes: number;

    liked?: boolean;

    dislikes: number;

    disliked?: boolean;

    comments?: Array<Comment>;

    author?: Author;

    subscribed?: boolean;
}
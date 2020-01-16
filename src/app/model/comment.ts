import Author from './author';
export default class Comment {
    text: string;

    likes: number;

    dislikes: number;

    author: Author;

    liked?: boolean;

    disliked?: boolean;
}
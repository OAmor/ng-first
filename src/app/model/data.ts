import { Training } from './training';
import { Btn } from './btn';
import { Video } from './video';
import Author from './author';
import Comment from './comment';

export class Data {
    public static list: Training[] = [
        { domain: 'Frontend Dev', title: 'Angular', evaluation: 5, description: 'A cool training about Angular', recommanded: true },
        { domain: 'Frontend Dev', title: 'React', evaluation: 2, description: 'Just to tell why React is not for me', recommanded: false },
        { domain: 'Backend Dev', title: 'Django', evaluation: 2, description: 'Why the hell are you teaching this', recommanded: false },
    ];

    public static listBtn: Btn[] = [
        { icon: 'home', text: 'Home' },
        { icon: 'facebook', text: 'Facebook' },
        { icon: 'twitter', text: 'Twitter' },
        { icon: 'google-plus', text: 'Google plus' },
    ];

    public static listVideo: Video[] = [
        { title: 'home1', link: 'Home', date: 'test', likes: 5, dislikes:10, image: 'image',
            author:{ name:'oussama', image: 'test', subscribers: 3},
            comments:[
                {text: 'comment text', likes: 2, dislikes: 10, author: { name: 'oussama', image: 'test', subscribers: 3}}
            ]
        },
        { title: 'home2', link: 'Home', date: 'test', likes: 5, dislikes:10, image: 'image',
            author:{ name:'oussama', image: 'test', subscribers: 3},
            comments:[
                {text: 'comment text', likes: 2, dislikes: 10, author: { name: 'oussama', image: 'test', subscribers: 3}}
            ]
        },
        { title: 'home3', link: 'Home', date: 'test', likes: 5, dislikes:10, image: 'image',
            author:{ name:'oussama', image: 'test', subscribers: 3},
            comments:[
                {text: 'comment text', likes: 2, dislikes: 10, author: { name: 'oussama', image: 'test', subscribers: 3}}
            ]
        }
    ];
}

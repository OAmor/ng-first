import { Training } from './training';
import { Btn } from './btn';
import { Video } from './video';

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
        { title: 'Bad at Picking COLORS? Let\'s fix that - RAPID Color Scheming',
            description:'Use code \'DESIGNC19\' to get $20 credit on your new Linode account!',
            link: 'https://www.youtube.com/embed/s9p3nF4rFaU', date: '13 janv. 2020', views: 25158, likes: 1300, dislikes:33,
            image: './assets/videos/hq720.jpg',time:'17:03',
            author:{ name:' DesignCourse', image: './assets/users/unnamed.jpg', subscribers: 499000},
            comments:[
                {text: 'Hey Gary. I liked the initiative you took over the color selection tuts. But I think you could have done a better job in color selection. Any of the artboards just didn\'t look professional, mainly due to bad color selection.',
                    likes: 5, dislikes: 0, author: { name: 'Ayush Parashar', image: './assets/users/unnamed1.jpg', subscribers: 3}},
                {text: 'When i use a color palette site like color inspo, i tend to take screenshot of the palette and import it into my canvas. I place at a corner so its not distracting.',
                    likes: 2, dislikes: 0, author: { name: 'Grabster ', image: './assets/users/unnamed2.jpg', subscribers: 233}}
            ]
        },

        { title: 'Create a Custom SVG Checkbox (Animated AND Accessible!)',
            description:'Use code \'DESIGNC19\' to get $20 credit on your new Linode account!',
            link: 'https://www.youtube.com/embed/46iQVS7WddE', date: '9 janv. 2020', views: 13132, likes: 677, dislikes:8,
            image: './assets/videos/hqdefault.jpg',time:'26:43',
            author:{ name:' DesignCourse', image: './assets/users/unnamed.jpg', subscribers: 499000},
            comments:[
                {text: 'You actually don\'t need to add javascript to reverse, you can set your transition to be on the unchecked/default version, it will reverse it. Great video though!',
                    likes: 24, dislikes: 0, author: { name: 'Arthur BienSur', image: './assets/users/unnamed3.jpg', subscribers: 1453}},
                {text: 'Hey Gary,U can use prettier extension to indent all those stuff automatically...',
                    likes: 1, dislikes: 0, author: { name: 'chirayu josh', image: './assets/users/unnamed4.jpg', subscribers: 33}}
            ]
        },

        { title: 'This is what happens when you reply to spam email | James Veitch',
            description:'Suspicious emails: unclaimed insurance bonds, diamond-encrusted safe deposit boxes, close friends marooned in a foreign country.',
            link: 'https://www.youtube.com/embed/_QdPW8JrYzQ', date: '1 févr. 2016', views: 47032655 , likes: 951000, dislikes:28000,
            image: './assets/videos/hqdefaultTed.jpg',time:'09:49',
            author:{ name:' TED', image: './assets/users/TED.jpg', subscribers: 15900000},
            comments:[
                {text: 'My brother got a text from a scammer so he spoiled endgame for them',
                    likes: 35000, dislikes: 0, author: { name: 'Manaphy099', image: './assets/users/unnamed5.jpg', subscribers: 11}},
                {text: 'This dude is the true definition of chaotic good.',
                    likes: 6400, dislikes: 0, author: { name: 'Honey Bunny', image: './assets/users/unnamed6.jpg', subscribers: 3}}
            ]
        },

        { title: 'Inside the mind of a master procrastinator | Tim Urban',
            description:"Tim Urban knows that procrastination doesn't make sense, but he's never been able to shake his habit of waiting until the last minute to get things done.",
            link: 'https://www.youtube.com/embed/arj7oStGLkU', date: '6 avr. 2016', views: 25503285 , likes: 884000, dislikes:9000,
            image: './assets/videos/hqdefaultTed2.jpg',time:'14:04',
            author:{ name:' TED', image: './assets/users/TED.jpg', subscribers: 15900000},
            comments:[
                {text: 'I feel like my \'Monkey\' is not afraid of monster anymore....',
                    likes: 413, dislikes: 0, author: { name: 'Michel Cerny', image: './assets/users/unnamed5.jpg', subscribers: 11}},
                {text: '“Inside the mind of master procrastinator” Me: adds to “watch later”',
                    likes: 18000, dislikes: 0, author: { name: 'C N', image: './assets/users/unnamed4.jpg', subscribers: 3}}
            ]
        },

        { title: '10 ways to have a better conversation | Celeste Headlee',
            description:'When your job hinges on how well you talk to people, you learn a lot about how to have conversations',
            link: 'https://www.youtube.com/embed/R1vskiVDwl4', date: '8 mars 2016', views: 7738149 , likes: 174000, dislikes:2500,
            image: './assets/videos/hqdefaultTed3.jpg',time:'11:44',
            author:{ name:' TED', image: './assets/users/TED.jpg', subscribers: 15900000},
            comments:[
                {text: 'Most people don\'t really listen, they\'re just waiting for their turn to speak',
                    likes: 459, dislikes: 0, author: { name: 'Michael Koro', image: './assets/users/unnamed5.jpg', subscribers: 11}},
                {text: '“Inside the mind of master procrastinator” Me: adds to “watch later”',
                    likes: 18000, dislikes: 0, author: { name: 'C N', image: './assets/users/unnamed4.jpg', subscribers: 3}}
            ]
        },
        { title: 'Angular Crash Course',
            description:'In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc',
            link: 'https://www.youtube.com/embed/Fdf5aTYRW0E', date: '23 janv. 2019', views: 455362 , likes: 81000, dislikes:129,
            image: './assets/videos/hqdefaultAng1.jpg',time:'01:24:09',
            author:{ name:'  Traversy Media', image: './assets/users/Trav.jpg', subscribers: 9690000},
            comments:[
                {text: 'Great introduction to Angular.Be blessed!',
                    likes: 1, dislikes: 0, author: { name: 'Harman Kibue', image: './assets/users/unnamed5.jpg', subscribers: 11}},
                {text: 'my httpClient methods are different plz help me',
                    likes: 0, dislikes: 0, author: { name: 'Tahir Mehmood', image: './assets/users/unnamed7.jpg', subscribers: 3}}
            ]
        },
        { title: 'Web Development In 2020 - A Practical Guide',
            description:'In this complete and practical guide, we will look at just about every technology in web development. You do NOT have to learn everything here.',
            link: 'https://www.youtube.com/embed/0pThnRneDjw', date: '5 déc. 2019', views: 335288 , likes: 15000, dislikes:136,
            image: './assets/videos/hqdefaultAng2.jpg',time:'01:12:45',
            author:{ name:'  Traversy Media', image: './assets/users/Trav.jpg', subscribers: 9690000},
            comments:[
                {text: 'I owe my career to this man. Thank you Mr Traversy!',
                    likes: 149, dislikes: 0, author: { name: 'Zack Leitzel-Berrie', image: './assets/users/unnamed8.jpg', subscribers: 1111}},
                {text: 'It gets better each and every year. Christmas came early.',
                    likes: 0, dislikes: 0, author: { name: 'Stuart Muyambi', image: './assets/users/unnamed9.jpg', subscribers: 3}}
            ]
        },
        { title: 'Node.js GeoJSON API & App | Store Locator',
            description:'In this project we will create a store locator API that serves GeoJSON data. We will also build a simple frontend using Mapbox to plot the points.',
            link: 'https://www.youtube.com/embed/9FQrFah9rnc', date: '31 déc. 2019', views: 38102 , likes: 18000, dislikes:14,
            image: './assets/videos/hqdefaultAng2.jpg',time:'01:16:42',
            author:{ name:'  Traversy Media', image: './assets/users/Trav.jpg', subscribers: 9690000},
            comments:[
                {text: 'Happy New Year, Brad! Thank you for everything you did for us in 2019! ',
                    likes: 71, dislikes: 0, author: { name: 'Florin Pop', image: './assets/users/unnamed5.jpg', subscribers: 71}},
                {text: 'would you like to do if react advanced tutorials.',
                    likes: 0, dislikes: 0, author: { name: 'ulisses', image: './assets/users/unnamed4.jpg', subscribers: 3}}
            ]
        },

    ];
}

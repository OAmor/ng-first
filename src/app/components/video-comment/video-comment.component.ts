import {Component, Input, OnInit} from '@angular/core';
import Comment from '../../model/comment';

@Component({
  selector: 'app-video-comment',
  templateUrl: './video-comment.component.html',
  styleUrls: ['./video-comment.component.scss']
})
export class VideoCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
  }

    addLikes(){
        if(this.comment.disliked){this.comment.disliked=false;this.comment.dislikes--}
        if(!this.comment.liked){this.comment.likes++;this.comment.liked=true;}
    }
    addDislikes(){
        if(this.comment.liked){this.comment.liked=false;this.comment.likes--}
        if(!this.comment.disliked){this.comment.dislikes++;this.comment.disliked=true;}
    }
}

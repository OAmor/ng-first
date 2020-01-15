import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../model/video';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.scss']
})
export class MainVideoComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

  addLikes(){
      if(this.video.disliked){this.video.disliked=false;this.video.dislikes--}
      if(!this.video.liked){this.video.likes++;this.video.liked=true;}
  }
  addDislikes(){
    if(this.video.liked){this.video.liked=false;this.video.likes--}
    if(!this.video.disliked){this.video.dislikes++;this.video.disliked=true;}
  }
}

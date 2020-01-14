import { Component, OnInit } from '@angular/core';
import {Data} from '../../model/data';
import { Video } from '../../model/video';

@Component({
  selector: 'app-youtube-view',
  templateUrl: './youtube-view.component.html',
  styleUrls: ['./youtube-view.component.scss']
})
export class YoutubeViewComponent implements OnInit {

  videos: Video[];

  video: Video;

  constructor() { }

  ngOnInit() {
      this.videos = Data.listVideo;
      this.video = Data.listVideo[0];
  }

  videoSelected(v: Video){
      this.video = v;
  }

}

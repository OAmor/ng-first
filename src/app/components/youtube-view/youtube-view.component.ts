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
  constructor() { }

  ngOnInit() {
      this.videos = Data.listVideo;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Video } from '../../model/video';


@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input() video: Video;

  @Output() clickEvent: EventEmitter<Video> = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.clickEvent.emit(video);
  }
}

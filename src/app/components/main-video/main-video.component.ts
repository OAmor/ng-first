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

}

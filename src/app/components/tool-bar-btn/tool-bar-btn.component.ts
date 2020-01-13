import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tool-bar-btn',
  templateUrl: './tool-bar-btn.component.html',
  styleUrls: ['./tool-bar-btn.component.scss']
})
export class ToolBarBtnComponent implements OnInit {

  @Input() text: string;

  @Input() icon: string;

  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  sendText(text: string) {
      this.clickEvent.emit(text);
  }

  ngOnInit() {
  }

}

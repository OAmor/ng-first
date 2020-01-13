import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bare',
  templateUrl: './tool-bare.component.html',
  styleUrls: ['./tool-bare.component.scss']
})
export class ToolBareComponent implements OnInit {

  result: string = 'No One';
  constructor() { }

  ngOnInit() {
  }

  btnClicked(text: string){
    this.result = text;
  }
}

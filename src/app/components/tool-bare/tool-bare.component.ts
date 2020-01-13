import { Component, OnInit } from '@angular/core';
import {Btn} from '../../model/btn';
import {Data} from '../../model/data';

@Component({
  selector: 'app-tool-bare',
  templateUrl: './tool-bare.component.html',
  styleUrls: ['./tool-bare.component.scss']
})
export class ToolBareComponent implements OnInit {

  result: string = 'No One';

  buttons: Btn[];

  constructor() { }

  ngOnInit() {
    this.buttons = Data.listBtn;
  }

  btnClicked(text: string){
    this.result = text;
  }
}

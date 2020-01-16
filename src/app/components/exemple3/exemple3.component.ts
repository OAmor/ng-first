import { Component, OnInit } from '@angular/core';
import { Training } from '../../model/training';
import { Data } from '../../model/data';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrls: ['./exemple3.component.scss']
})
export class Exemple3Component implements OnInit {

  trainings: Training[];

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}

import { Component, OnInit } from '@angular/core';
import { Training } from '../../model/training';
import { Data } from '../../model/data';

@Component({
  selector: 'app-exemple7',
  templateUrl: './exemple7.component.html',
  styleUrls: ['./exemple7.component.scss']
})
export class Exemple7Component implements OnInit {

  trainings: Training[];

  constructor() { }

  ngOnInit() {
    this.trainings = Data.list;
  }

}

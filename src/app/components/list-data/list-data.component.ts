import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../../model/training';
import { Data } from '../../model/data';
import { TrainingService } from '../../services/training/training.service';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
  providers: []
})
export class ListDataComponent implements OnInit {

  @Input() trainings: Training[] = [];


  constructor(public ser: TrainingService) { }

  ngOnInit() {

  }

}

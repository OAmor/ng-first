import { Component, OnInit } from '@angular/core';
import { Training } from '../../model/training';
import { TrainingService } from '../../services/training/training.service';


@Component({
  selector: 'app-exemple8',
  templateUrl: './exemple8.component.html',
  styleUrls: ['./exemple8.component.scss'],
  providers: []
})
export class Exemple8Component implements OnInit {

  trainings: Training[];



  constructor(private $ser: TrainingService) {


  }

  ngOnInit() {
    this.trainings = this.$ser.getData();
  }

}

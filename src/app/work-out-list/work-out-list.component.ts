import { Component, OnInit } from '@angular/core';
import { WorkOut } from '../work-out';

@Component({
  selector: 'app-work-out-list',
  templateUrl: './work-out-list.component.html',
  styleUrls: ['./work-out-list.component.css']
})
export class WorkOutListComponent implements OnInit {

  workOuts : WorkOut[];

  constructor() { 
    this.workOuts=[
      {'workoutId':101,'workOutTitle':'Skipping','calsBurntPerUnit':34,'unit':'MINUTE'},
      {'workoutId':102,'workOutTitle':'Thread Mill','calsBurntPerUnit':54,'unit':'MINUTE'}
    ]
  }

  ngOnInit() {
  }
  
}

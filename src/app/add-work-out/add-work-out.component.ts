import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkOutUser } from '../work-out-user';
import { WorkOut } from '../work-out';

@Component({
  selector: 'app-add-work-out',
  templateUrl: './add-work-out.component.html',
  styleUrls: ['./add-work-out.component.css']
})
export class AddWorkOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

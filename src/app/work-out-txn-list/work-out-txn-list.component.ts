import { Component, OnInit } from '@angular/core';
import { WorkOutTxn } from '../work-out-txn';
import { ActivatedRoute } from '@angular/router';
import {TimerData} from 'app/timer-data';
import {TimerServiceService} from 'app/timer-service.service';
import { WorkOutTransService } from '../work-out-trans.service';

@Component({
  selector: 'app-work-out-txn-list',
  templateUrl: './work-out-txn-list.component.html',
  styleUrls: ['./work-out-txn-list.component.css'],
  providers : [TimerServiceService]
})
export class WorkOutTxnListComponent implements OnInit {

  wid : number;
  workOutTitle : string;
  transactions : WorkOutTxn[];
  route : ActivatedRoute;
  hours : number;
  minutes : number;
  seconds : number;

  timer : TimerServiceService;

  startTime : Date;
  endTime : Date;

  constructor(route : ActivatedRoute, timer : TimerServiceService) {
    this.route = route;
    this.timer = timer;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      
    this.wid = params['wid'];
    this.workOutTitle = params['workOutTitle'];
        
    this.transactions = [
      {"transactionId":1,"calBurnt":10,"startTime":new Date(),"endTime":new Date()},
      {"transactionId":2,"calBurnt":20,"startTime":new Date(),"endTime":new Date()}
    ]

    });
        
  }

  startTimer(){
    this.startTime = new Date();
    this.timer.start();
  }

  stopTimer(){
    this.endTime = new Date();
    this.timer.stop();

    // This below data should come from teh spring API

    var trans = new WorkOutTxn();
    trans.transactionId = this.transactions[this.transactions.length - 1].transactionId + 1;
    trans.startTime = this.startTime;
    trans.endTime = this.endTime;
    trans.calBurnt = 50;
    this.transactions.push(trans);
  }

}

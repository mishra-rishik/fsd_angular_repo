import { Injectable } from '@angular/core';
import { TimerData } from 'app/timer-data';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class TimerServiceService {

  timerData : TimerData;
  timerHandle : Subscription;

  constructor() { 
    this.timerData = new TimerData();
        
  }

  start(){
    this.timerData = new TimerData();
    this.timerHandle = Observable.interval(1000).subscribe(x => {
      this.stepTimer();
    });
  }

  stepTimer(){
    this.timerData.seconds++;
    if(this.timerData.seconds >= 60){
      this.timerData.minutes++;
      this.timerData.seconds=0;
        if(this.timerData.minutes >= 60){
          this.timerData.hours++;
          this.timerData.minutes=0;
        }
    }
  }

  stop(){
    this.timerHandle.unsubscribe();
  }
 

}

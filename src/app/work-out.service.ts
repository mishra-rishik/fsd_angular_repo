import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { WorkOut } from 'app/work-out';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WorkOutService {

  workOutUrl : string;
  

  constructor(private http: Http) {
    this.workOutUrl = environment.baseAPIUrl + "workouts";
   }

  
  getWorkOut(workoutId){
    return this.http.get(this.getWorkOutUrl(workoutId))
      .map(res => res.json());
  }

  addWorkout(workOut){
    return this.http.post(this.workOutUrl, JSON.stringify(workOut))
      .map(res => res.json());
  }

  updateUser(workOut){
    return this.http.put(this.getWorkOutUrl(workOut.workoutId), JSON.stringify(workOut))
      .map(res => res.json());
  }

  deleteUser(workoutId){
    return this.http.delete(this.getWorkOutUrl(workoutId))
      .map(res => res.json());
  }

  private getWorkOutUrl(workoutId){
    return this.workOutUrl + "/" + workoutId;
  }
   

}

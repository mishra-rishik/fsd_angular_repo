import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { WorkOutTxn } from 'app/work-out-txn';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WorkOutTransService {

  workOutTxnUrl : string;

  constructor(private http: Http) {
    this.workOutTxnUrl = environment.baseAPIUrl + "trans";
  }

  getWorkOutTxn(transactionId){
    return this.http.get(this.getWorkOutTxnUrl(transactionId))
      .map(res => res.json());
  }

  addWorkout(workOutTxn){
    return this.http.post(this.workOutTxnUrl, JSON.stringify(workOutTxn))
      .map(res => res.json());
  }

  private getWorkOutTxnUrl(transactionId){
    return this.workOutTxnUrl + "/" + transactionId;
  }
}

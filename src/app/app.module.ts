import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddWorkOutComponent } from './add-work-out/add-work-out.component';
import { WorkOutListComponent } from './work-out-list/work-out-list.component';
import { WorkOutTxnListComponent } from './work-out-txn-list/work-out-txn-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'woList', component: WorkOutListComponent},
  {path: 'txnList/:workoutId/:workOutTitle', component: WorkOutTxnListComponent}
]

@NgModule({
  exports: [ RouterModule ],

  declarations: [
    AppComponent,
    LoginComponent,
    AddWorkOutComponent,
    WorkOutListComponent,
    WorkOutTxnListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

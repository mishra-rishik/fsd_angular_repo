import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkOutUser } from '../work-out-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : WorkOutUser;
  showLogin : boolean;
  logoImg : string;

  constructor(private route: ActivatedRoute,
    private router: Router) {

        this.model = new WorkOutUser;
        this.showLogin = true;
        this.logoImg = 'assets/images/workoutImage.jpg';
    
   }

  ngOnInit() {
  }

  login() {
    
    /* this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });*/
}

}

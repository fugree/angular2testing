import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;

import { IdentityService } from '../../services/identity/identity.service' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string ; 
  password : string ; 
   model: any = {};
    loading = false;
    error = '';

  constructor(private router: Router,
              private identityService: IdentityService) { }

 


  ngOnInit() {
    //reset login status 
    this.identityService.logout() ; 
  }

  login() {
        this.loading = true;
        this.identityService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/home']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });       
    }

}

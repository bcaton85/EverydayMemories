import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {email:'',password:''};

  constructor(private router: Router, private userSvc: UserService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    console.log(form);

    // Sort circuiting prevents login from being called on invalid form
    if(form.valid ){

      this.userSvc.login(this.user.email, this.user.password).subscribe( (response)=> {
          console.log(response);

          if(response.success){
            console.log("login succeeded");
            this.router.navigateByUrl('/layout/submit');
          } else {
            console.log(" login failed");
          }
        });

    }
  }

}

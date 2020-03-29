import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { AuthService } from '../../providers/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {email:'',password:''};

  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async login(form: NgForm){
    console.log(form);

    // TODO: form validation

    // Sort circuiting prevents login from being called on invalid form
    console.log(form.valid);
    console.log(this.authSvc.login(this.user.email, this.user.password));
    if(form.valid && await this.authSvc.login(this.user.email, this.user.password)){
      this.router.navigateByUrl('/layout/submit');
    }
  }

}

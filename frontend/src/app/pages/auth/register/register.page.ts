import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl("/login");
  }

  register(form){
    console.log("form submitted");
    this.authService.register(form.value.name, form.value.email, form.value.password).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/login');
    },
    error => {
      console.log(error);
    },
    () => {    });
  }

}

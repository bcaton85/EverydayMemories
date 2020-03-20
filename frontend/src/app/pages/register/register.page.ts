import { Component, OnInit } from '@angular/core';
import {RegisterUser} from '../interfaces/registeredUser';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // TODO: use interface
  user: RegisterUser = {
    email:'',
    password:'',
    passwordConfirm:''
  }

  constructor(private router: Router, private userSvc: UserService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.user);

    if(this.user.password !== this.user.passwordConfirm){
      // TODO: return form error
      return;
    }

    this.userSvc.register(this.user.email, this.user.password).then((response)=>{
      console.log(response);

      if(response.success){
        this.router.navigateByUrl('/layout/submit');
      } else {
        // TOOD: handle err
      }

    })
    .catch((err)=>{
      console.log(err);
    });

  }

}

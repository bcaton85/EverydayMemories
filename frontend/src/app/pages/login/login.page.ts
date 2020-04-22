import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { AuthService } from '../../providers/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = {email:'',password:''};

  constructor(private router: Router, private authSvc: AuthService, public toastController: ToastController) { }

  ngOnInit() {
  }

  async login(form: NgForm){
    console.log(form);

    // TODO: form validation

    if(form.valid && await this.authSvc.login(this.user.email, this.user.password)){
      console.log('login succeeded');
      this.router.navigateByUrl('/layout/submit');
    } else {
      console.log('login failed');
      this.presentToast('Login failed','danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message: message,
      color: color,
      duration: 2000
    });
    toast.present();
  }

}

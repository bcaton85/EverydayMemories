import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Router } from  "@angular/router";

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private  router:  Router) {

  }

  ngOnInit(){
    if(!this.authProvider.isLoggedIn()){
    
    }
  }

}

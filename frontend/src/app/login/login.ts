import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {

  private user = {}

  constructor() { }

  ngOnInit() {

  }

  login(){
    console.log(this.user);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // TODO: use interface
  user = {}

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.user);
  }

}

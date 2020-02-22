import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register implements OnInit {

  user = {}

  constructor() { }

  ngOnInit() {

  }

  register(){
    console.log(this.user);
  }

}

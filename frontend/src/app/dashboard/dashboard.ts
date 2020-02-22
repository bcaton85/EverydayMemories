import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit {

  user = {}

  constructor() { }

  ngOnInit() {

  }

  register(){
    console.log(this.user);
  }

}

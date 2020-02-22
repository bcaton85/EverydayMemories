import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.html',
  styleUrls: ['./submission.scss'],
})
export class Submission implements OnInit {

  user = {}

  constructor() { }

  ngOnInit() {

  }

  register(){
    console.log(this.user);
  }

}

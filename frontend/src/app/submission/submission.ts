import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'submission-component',
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

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Memory } from '../interfaces/memory';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  memory: Memory = {message: ''};

  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm){
    console.log(form.valid);
  }

}

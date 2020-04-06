import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../interfaces/message';
import { MessageService } from '../../providers/message.service';
import * as moment from 'moment';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  private message: Message = {userId: '',messageText: '',submissionDate:''};

  constructor(private messageSvc: MessageService) { }

  ngOnInit() {}

  submit(form: NgForm){
    console.log(form.valid);

    this.message.submissionDate = moment().utc().toISOString();

    this.messageSvc.submit(this.message).then((response)=>{
      console.log(response);
      if(response.success){
        //TODO: implement success submission for user
      } else {
        //TODO: implement failure submission for user
      }
    })
    .catch((error)=>{
      console.log(error);
    });

  }

}

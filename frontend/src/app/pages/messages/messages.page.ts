import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../providers/message.service';
import { Message } from 'src/app/pages/interfaces/message';
import * as moment from 'moment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages: Array<Message> = [];

  constructor(private messageSvc: MessageService) { }

  ngOnInit() {}
  
  ionViewWillEnter(){
    this.getMessages();
  }
  
  getMessages(){
    this.messageSvc.getMessages().then((response)=>{

      this.messages = response.messages.map( (message: Message) => {
        console.log(message);
        message.submissionDate = moment(message.submissionDate).utcOffset(new Date().getTimezoneOffset()).format('MM/DD/YYYY hh:mm a');
        return message;
      });
      console.log(this.messages);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

}

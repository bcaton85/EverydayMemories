import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../providers/message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    this.messageSvc.getMessages("0").then((response)=>{
      this.messages = response.messages;
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

}

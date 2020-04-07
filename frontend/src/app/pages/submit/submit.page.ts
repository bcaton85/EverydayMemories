import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../interfaces/message';
import { MessageService } from '../../providers/message.service';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {

  private message: Message = {userId: '',messageText: '',submissionDate:''};

  constructor(private messageSvc: MessageService, public toastController: ToastController) { }

  ngOnInit() {}

  submit(form: NgForm){
    console.log(form.valid);

    this.message.submissionDate = moment().utc().toISOString();

    this.messageSvc.submit(this.message).then((response)=>{
      console.log(response);
      if(response.success){
        this.presentToast("Message saved","success");
        this.message.messageText = "";
      } else {
        this.presentToast("Unable to save message, please wait and try again","danger");
      }
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      position: 'top',
      message: message,
      color: color,
      duration: 2000
    });
    toast.present();
  }

}

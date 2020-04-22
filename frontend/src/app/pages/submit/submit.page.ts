import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../interfaces/message';
import { MessageService } from '../../providers/message.service';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  photo: SafeResourceUrl;
  photoDataUrl: string;
  message: Message = {userId: '',messageText: '',submissionDate:''};

  constructor(private sanitizer: DomSanitizer, private messageSvc: MessageService, public toastController: ToastController) { }

  ngOnInit() {}

  async submit(form: NgForm){

    this.message.submissionDate = moment().utc().toISOString();
    const blob: Blob = await fetch(this.photoDataUrl).then(photo => photo.blob() );

    

    const formData: FormData = new FormData();
    formData.append('message',JSON.stringify(this.message));
    formData.append('image', blob ,'user-image');

    this.messageSvc.submit(formData).then((response)=>{
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

  async takePicture(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    // console.log(image.dataUrl);
    console.log(image);
    this.photoDataUrl = image.dataUrl;

    // TODO: poses possible security risk, investigate and resolve
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
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

import { Submission } from './submission';
import { NgModule } from '@angular/core';
import { SubmissionRoutingModule } from './submission-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        SubmissionRoutingModule,
        FormsModule,
        IonicModule
    ],
    declarations: [Submission]
  })
  export class SubmissionModule {}
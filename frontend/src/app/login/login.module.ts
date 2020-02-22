import { NgModule } from '@angular/core';
import { Login } from './login';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule
  ],
  declarations: [Login]
})
export class LoginModule {}

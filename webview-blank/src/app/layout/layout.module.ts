import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';

import { SubmitPageModule } from '../submit/submit.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitPageModule,
    LayoutPageRoutingModule,
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}

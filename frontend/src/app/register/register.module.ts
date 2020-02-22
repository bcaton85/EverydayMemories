import { Register } from './register';
import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        RegisterRoutingModule
    ],
    declarations: [Register]
  })
  export class RegisterModule {}
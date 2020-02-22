import { Dashboard } from './dashboard';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule,
        DashboardRoutingModule
    ],
    declarations: [Dashboard]
  })
  export class DashboardModule {}
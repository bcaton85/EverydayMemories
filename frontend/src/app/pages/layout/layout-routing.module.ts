import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children:[
      {
        path:'home',
        children:[
          {
            path:'',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path:'submit',
        children:[
          {
            path:'',
            loadChildren: () => import('../submit/submit.module').then(m => m.SubmitPageModule)
          }
        ]
      },
      {
        path:'messages',
        children:[
          {
            path:'',
            loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
          }
        ]
      },
      {
        path:'settings',
        children:[
          {
            path:'',
            loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}

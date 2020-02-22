import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {Submission} from './submission/submission';
import {Dashboard} from './dashboard/dashboard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterModule) },
  { 
    path: 'dashboard', 
    component: Dashboard,
    children: [
      { path: 'submit', loadChildren: () => import('./submission/submission.module').then( m => m.SubmissionModule) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

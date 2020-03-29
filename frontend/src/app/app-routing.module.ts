import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'layout',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/layout/layout.module').then( m => m.LayoutPageModule)
  },
  {
    path: 'messages',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'settings',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

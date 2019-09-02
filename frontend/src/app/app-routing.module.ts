import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from '../pages/auth/login/login.module';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginPageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
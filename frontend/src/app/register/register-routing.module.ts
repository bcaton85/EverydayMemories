import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register } from './register';

const routes: Routes = [
  {
    path: '',
    component: Register
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}

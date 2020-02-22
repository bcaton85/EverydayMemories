import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Submission } from './submission';

const routes: Routes = [
  { path: '', component: Submission }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionRoutingModule {}

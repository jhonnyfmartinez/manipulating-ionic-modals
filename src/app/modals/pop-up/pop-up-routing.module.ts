import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopUpPage } from './pop-up.page';

const routes: Routes = [
  {
    path: '',
    component: PopUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopUpPageRoutingModule {}

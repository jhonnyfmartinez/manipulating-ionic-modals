import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomDrawerPage } from './bottom-drawer.page';

const routes: Routes = [
  {
    path: '',
    component: BottomDrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomDrawerPageRoutingModule {}

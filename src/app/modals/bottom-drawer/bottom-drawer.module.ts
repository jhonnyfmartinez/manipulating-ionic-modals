import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomDrawerPageRoutingModule } from './bottom-drawer-routing.module';

import { BottomDrawerPage } from './bottom-drawer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomDrawerPageRoutingModule
  ],
  declarations: [BottomDrawerPage]
})
export class BottomDrawerPageModule {}

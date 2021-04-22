import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopUpPageRoutingModule } from './pop-up-routing.module';

import { PopUpPage } from './pop-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopUpPageRoutingModule
  ],
  declarations: [PopUpPage]
})
export class PopUpPageModule {}

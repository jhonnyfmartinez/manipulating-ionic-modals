import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefaultModalPageRoutingModule } from './default-modal-routing.module';

import { DefaultModalPage } from './default-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultModalPageRoutingModule
  ],
  declarations: [DefaultModalPage]
})
export class DefaultModalPageModule {}

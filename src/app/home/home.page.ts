import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DefaultModalPage } from '../modals/default-modal/default-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  async openDefaultModal() {
    const modal = await this.modalCtrl.create({
      component: DefaultModalPage,
    });
    await modal.present();
  }

}

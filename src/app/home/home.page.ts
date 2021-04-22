import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BottomDrawerPage } from '../modals/bottom-drawer/bottom-drawer.page';
import { DefaultModalPage } from '../modals/default-modal/default-modal.page';
import { PopUpPage } from '../modals/pop-up/pop-up.page';

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

  async openPopUpModal() {
    const modal = await this.modalCtrl.create({
      component: PopUpPage,
      // Add the adaptable-modal class will give the modal a pop-up behaviour.
      // It'll have a full width by default so we also add the custom-size class as we need to avoid full-size.
      cssClass: 'adaptable-modal modal-xl'
    });
    await modal.present();
  }

  /**
   * For this case we will supose that we only want the bottom drawer modal to be closed by the swipe down gesture.
   * So, we remove the backdrop dismiss on click directly from the modal props by setting backdropDismiss to false.
   */
  async openBottomDrawerModal() {
    const modal = await this.modalCtrl.create({
      component: BottomDrawerPage,
      cssClass: 'adaptable-modal bottom-drawer',
      swipeToClose: true,
      backdropDismiss: false,
      mode: 'ios', // fix the mode to ios will be mandatory due by material design behavior has not swip to close modals
    });
    await modal.present();
  }

}

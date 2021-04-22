import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.page.html',
  styleUrls: ['./default-modal.page.scss'],
})
export class DefaultModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}

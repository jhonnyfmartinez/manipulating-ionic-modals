import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.page.html',
  styleUrls: ['./pop-up.page.scss'],
})
export class PopUpPage implements OnInit {

  constructor(
    private modalCtl: ModalController
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtl.dismiss();
  }

}

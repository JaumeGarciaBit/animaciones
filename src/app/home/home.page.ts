import { animationButton } from './../animations';
import { modalLeaveAnimation } from './../animations';
import { modalEnterAnimation } from './../animations';
import { AnimationController, ModalController } from '@ionic/angular';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NewPagePage } from '../new-page/new-page.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("button", {read: ElementRef, static:true}) button: ElementRef;

  constructor(
    private modalCtrl: ModalController/* ,
    private animationCtrl: AnimationController */) {}

  ngAfterViewInit() {
     animationButton().play();
  }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: NewPagePage,
      enterAnimation: modalEnterAnimation,
      leaveAnimation: modalLeaveAnimation
    })

    await modal.present();
  }



  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { InformationRequestedPage } from '../information-requested/information-requested';
import { SoftDrinksPage } from '../soft-drinks/soft-drinks';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Se añadió a su pedido',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  NavigationSoftDrinks(){
    this.navCtrl.push(SoftDrinksPage);
  }

  NavigationInformationRequested(){
    this.navCtrl.push(InformationRequestedPage);
  }
}

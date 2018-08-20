import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information';

/**
 * Generated class for the InformationRequestedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-requested',
  templateUrl: 'information-requested.html',
})
export class InformationRequestedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationRequestedPage');
  }

  NavigationInformation(){
    this.navCtrl.push(InformationPage);
  }

}

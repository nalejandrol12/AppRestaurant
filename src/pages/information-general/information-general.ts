import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestaurantPage } from '../restaurant/restaurant';



/**
 * Generated class for the InformationGeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-general',
  templateUrl: 'information-general.html',
})
export class InformationGeneralPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InformationGeneralPage');
  }

  onAdd() {
    let listOrders = [];
    this.storage.get('orders').then((val) => {
      if (val == null) {
        listOrders.push(this.item);
        this.storage.set('orders', listOrders);
      } else {
        this.storage.get('orders').then((val) => {
          val.push(this.item);
          this.storage.set('orders', val);
          /*this.storage.get('orders').then((val) => {
            console.log(val);
          });*/
        });
      }
    });
    this.navCtrl.setRoot(RestaurantPage);
  }

}

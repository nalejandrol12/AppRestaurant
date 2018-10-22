import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestaurantPage } from '../restaurant/restaurant';
import { DataServicesProvider } from '../../providers/data-services/data-services';

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

  private listOrders = [];
  private sum = 0;
  disabledButtonId: string;
  private userId = "";
  private name = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, public dataService: DataServicesProvider) {
  }

  ionViewDidLoad() {
    this.onAdd();
  }

  onAdd() {
    this.storage.get('orders').then((val) => {
      this.listOrders = val;
      for (var i in val) {
        this.sum = this.sum + val[i].price;
      }
      if (val == null) {
        this.disabledButtonId = "1";
      } else {
        this.disabledButtonId = "0";
      }
    });
    this.storage.get('id_user').then((res) => {
      this.userId = res;
    }, err => {
      console.log(err);
    });
    this.storage.get('nameUser').then((res1) => {
      this.name = res1;
    }, err => {
      console.log(err);
    })
  }

  sendOrder() {
    this.dataService.addOrder(this.listOrders, this.userId, this.name).subscribe(res => {
      this.storage.remove('orders');
      this.navCtrl.setRoot(RestaurantPage);
    }, err => {
      console.log(err);
    })
  }

}

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
  private notes: string;

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
        listOrders.push({
          name: this.item.name,
          image: this.item.image,
          notes: this.notes,
          price: this.item.price,
          drink: null,
          id_product: this.item._id,
          id_local: this.item.id_local
        });
        this.storage.set('orders', listOrders);
      } else {
        this.storage.get('orders').then((val) => {
          val.push({
            name: this.item.name,
            image: this.item.image,
            notes: this.notes,
            price: this.item.price,
            drink: null,
            id_product: this.item._id,
            id_local: this.item.id_local
          });
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

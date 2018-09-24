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
  private sum=0;
  disabledButtonId:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage, public dataService: DataServicesProvider) {
  }

  ionViewDidLoad() {
    this.onAdd();
  }

  onAdd(){
    this.storage.get('orders').then((val) => {
        this.listOrders = val;
        for(var i in val){
          this.sum = this.sum + val[i].price;
        }
        console.log(val)
        if(val==null){
          this.disabledButtonId = "1";
        }else{
          this.disabledButtonId = "0";
        }
    });
  }

  sendOrder(){
    this.dataService.addOrder(this.listOrders).subscribe(res=>{
      this.storage.remove('orders');
      this.navCtrl.setRoot(RestaurantPage);
    }, err => {
      console.log(err);
    })
  }

}

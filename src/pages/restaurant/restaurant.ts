import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  private listHistory: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: DataServicesProvider) {
  }

  ionViewDidLoad() {
    this.getLocal();
  }

  NavigationMenuPage(item) {
    this.navCtrl.push(MenuPage, { item: item });
  }

  getLocal() {
    this.dataService.getLocal().subscribe(res => {
      this.listHistory = res;
    }, err => {
      console.log(err);
    })
  }
}

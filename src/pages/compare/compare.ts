import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information';
import { InformationGeneralPage } from '../information-general/information-general';
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the ComparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {
  private pet: string;

  private search2: string;
  private listPrice: any = [];
  private listTime: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: DataServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparePage');
  }
  onGet() {
    this.dataService.getComparation(this.search2).subscribe(res => {
      this.listPrice = res;
      this.pet = "price";
    }, err => {
      console.log(err);
    })

    this.dataService.getComparation2(this.search2).subscribe(res => {
      this.listTime = res;
    }, err => {
      console.log(err);
    })

  }

  informationNavigation(item, category: any) {
    if (category != "COMBOS") {
      this.navCtrl.push(InformationGeneralPage, { item: item });
    } else {
      this.navCtrl.push(InformationPage, { item: item });
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information'
import { DataServicesProvider } from '../../providers/data-services/data-services';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  item;
  private listTipico: any = [];
  private listCombo: any = [];
  private listBebida: any = [];
  private listAlcoholica: any = [];
  private listHistory: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: DataServicesProvider) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    this.onGet();
  }

  onGet() {
    this.dataService.getProduct(this.item._id).subscribe(res => {
      this.listHistory = res;
      for(let i of this.listHistory){
        if(i.category === "TIPICO"){
          this.listTipico[this.listTipico.length] = i;
        }
        if(i.category === "COMBOS"){
          this.listCombo[this.listCombo.length] = i;
        }
        if(i.category === "BEBIDAS"){
          this.listBebida[this.listBebida.length] = i;
        }
        if(i.category === "BEBIDAS ALCOHOLICAS"){
          this.listAlcoholica[this.listAlcoholica.length] = i;
        }
      }
    }, err => {
      console.log(err);
    })
  }

  NavigationHistoryInformationPage() {
    this.navCtrl.push(InformationPage);
  }

}

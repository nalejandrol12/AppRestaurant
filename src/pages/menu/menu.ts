import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformationPage } from '../information/information'

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
  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public renderer: Renderer) {
      this.item = navParams.data.item;  
  }

  ionViewDidLoad() {
    console.log(this.cardContent.nativeElement);
  }

  NavigationHistoryInformationPage() {
    this.navCtrl.push(InformationPage);
  }

  toogleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded = !this.accordionExapanded;
  }

}

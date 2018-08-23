import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { RestaurantPage } from '../restaurant/restaurant';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, public dataService: DataServicesProvider,
    public storage: Storage, public alerCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  onAdd() {
    this.dataService.addLogin(this.email, this.password).subscribe(res => {
      this.storage.set('token', res.token);
      this.storage.get('token').then((val) => {
        if(val != ''){
          this.storage.remove('token');
          this.presentLoadingCustom();
        }
      });
    },
      err => {
        if (err.status === 401) {
          this.doAlert(1);
        } else if (err.status === 500) {
          this.doAlert(2);
        }
      });
  }

  NavigationSelect(data: any) {
    if (data === 1) {
      this.navCtrl.push(RestaurantPage);
    } else {
      this.navCtrl.push(RegisterPage);
    }

  }

  doAlert(data: any) {
    let alert;
    if (data === 1) {
      alert = this.alerCtrl.create({
        title: 'Error',
        message: 'Email o contraseña incorrectas',
        buttons: ['Aceptar']
      });
    }else{
      alert = this.alerCtrl.create({
        title: 'Error',
        message: 'Error con el servidor',
        buttons: ['Aceptar']
      });
    }

    alert.present()
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Ingresando....'
    });

    loading.present();

    setTimeout(() => {
      this.NavigationSelect(1);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

}

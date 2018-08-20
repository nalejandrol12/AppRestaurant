import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';
import { AlertController } from 'ionic-angular';
import { DataServicesProvider } from '../../providers/data-services/data-services';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private name: string;
  private cedula: number;
  private phone: number;
  private email: string;
  private password: string;
  private check: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alerCtrl: AlertController, public dataService: DataServicesProvider,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  NavigationSelect() {
    this.navCtrl.push(RestaurantPage);
  }

  onAdd() {
    if (this.name != '' && this.phone != null && this.email != '' && this.password != '') {
      this.dataService.addCourses(this.name, this.cedula, this.phone, this.email, this.password, this.check)
        .subscribe(res => {
          this.storage.set('token', res.token);
          this.storage.get('token').then((val) => {
            if (val != '') {
              this.storage.remove('token');
              this.NavigationSelect();
            }
          });
        }, err =>{
          console.log(err);
        })
    } else {
      this.doAlert(2);
    }

  }

  doAlert(data: any) {
    let alert;

    if (data === 1) {
      alert = this.alerCtrl.create({
        title: 'Terminos y condiciones',
        message: 'Al aceptar los términos y condiciones, se compromete a que las distintas entidades, puedan enviarle información a su correo. ',
        buttons: ['Aceptar']
      });
    } else {
      alert = this.alerCtrl.create({
        title: 'Campos vacíos',
        message: 'Todos los campos son requeridos, excepto el de la cedula para que el registro sea exitoso.',
        buttons: ['Aceptar']
      });
    }

    alert.present()
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { InformationPage } from '../pages/information/information';
import { InformationRequestedPage } from '../pages/information-requested/information-requested';
import { SoftDrinksPage } from '../pages/soft-drinks/soft-drinks';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { InformationGeneralPage } from '../pages/information-general/information-general';
import { ComparePage } from '../pages/compare/compare';
import { DataServicesProvider } from '../providers/data-services/data-services';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MenuPage,
    InformationPage,
    InformationRequestedPage,
    SoftDrinksPage,
    RestaurantPage,
    InformationGeneralPage,
    ComparePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MenuPage,
    InformationPage,
    InformationRequestedPage,
    SoftDrinksPage,
    RestaurantPage,
    InformationGeneralPage,
    ComparePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServicesProvider
  ]
})
export class AppModule {}

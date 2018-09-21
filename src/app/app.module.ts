import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPageModule } from '../pages/register/register.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { InformationPageModule } from '../pages/information/information.module';
import { InformationRequestedPageModule } from '../pages/information-requested/information-requested.module';
import { RestaurantPageModule } from '../pages/restaurant/restaurant.module';
import { InformationGeneralPageModule } from '../pages/information-general/information-general.module';
import { ComparePageModule } from '../pages/compare/compare.module';
import { DataServicesProvider } from '../providers/data-services/data-services';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
 declarations: [
   MyApp,
   HomePage
 ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpClientModule,
   ComparePageModule,
   RegisterPageModule,
   MenuPageModule,
   InformationPageModule,
   InformationRequestedPageModule,
   RestaurantPageModule,
   InformationGeneralPageModule,
   IonicStorageModule.forRoot(),
   IonicModule.forRoot(MyApp)
 ],
 bootstrap: [IonicApp],
 entryComponents: [
   MyApp,
   HomePage
 ],
 providers: [
   StatusBar,
   SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},
   DataServicesProvider
 ]
})
export class AppModule {}

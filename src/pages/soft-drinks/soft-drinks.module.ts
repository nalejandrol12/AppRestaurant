import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftDrinksPage } from './soft-drinks';

@NgModule({
  declarations: [
    SoftDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(SoftDrinksPage),
  ],
})
export class SoftDrinksPageModule {}

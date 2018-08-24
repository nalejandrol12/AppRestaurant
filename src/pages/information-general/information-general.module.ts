import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationGeneralPage } from './information-general';

@NgModule({
  declarations: [
    InformationGeneralPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationGeneralPage),
  ],
})
export class InformationGeneralPageModule {}

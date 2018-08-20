import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationRequestedPage } from './information-requested';

@NgModule({
  declarations: [
    InformationRequestedPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationRequestedPage),
  ],
})
export class InformationRequestedPageModule {}

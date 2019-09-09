import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEmergencyPage } from './add-emergency';

@NgModule({
  declarations: [
    AddEmergencyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEmergencyPage),
  ],
})
export class AddEmergencyPageModule {}

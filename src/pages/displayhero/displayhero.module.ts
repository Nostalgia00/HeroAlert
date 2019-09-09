import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayheroPage } from './displayhero';

@NgModule({
  declarations: [
    DisplayheroPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayheroPage),
  ],
})
export class DisplayheroPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHeroPage } from './add-hero';

@NgModule({
  declarations: [
    AddHeroPage,
  ],
  imports: [
    IonicPageModule.forChild(AddHeroPage),
  ],
})
export class AddHeroPageModule {}

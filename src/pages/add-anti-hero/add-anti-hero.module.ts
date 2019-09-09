import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAntiHeroPage } from './add-anti-hero';

@NgModule({
  declarations: [
    AddAntiHeroPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAntiHeroPage),
  ],
})
export class AddAntiHeroPageModule {}

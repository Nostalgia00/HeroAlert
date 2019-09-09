import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //navigate to emergency page
  public goToEmergency()
  {
  	this.navCtrl.push(EmergencyPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DispatchheroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispatchhero',
  templateUrl: 'dispatchhero.html',
})
export class DispatchheroPage {

  name:String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // takes the hero name from navParams to be displayed on the dispatchhero page
    this.name = this.navParams.get('heroName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchheroPage');
  }
  // return to home page
  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

}

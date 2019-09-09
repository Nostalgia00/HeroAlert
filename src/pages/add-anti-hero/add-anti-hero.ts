import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AntiHero } from '../../data_model/antiheroes';
import { AntiHeroListService } from '../../service/AntiHeroListService';
import { SelectheroPage} from '../selecthero/selecthero';


@IonicPage()
@Component({
  selector: 'page-add-anti-hero',
  templateUrl: 'add-anti-hero.html',
})
export class AddAntiHeroPage {

  /* create an anti-hero object we can use */
  /* We don't need the key here - because when we write the object
  to Firebase - the Firebase database will create the key */
  antiheroRecord: AntiHero = {
  antiheroName: '',
  attribute1: '',
	attribute2: '',
	attribute3: ''

  };


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private antihero: AntiHeroListService) {
  }

  addAntiHeroFromScreen(ah: AntiHero)
  {
  	this.antihero.addAntiHero(ah);
    this.navCtrl.pop();

  }



}

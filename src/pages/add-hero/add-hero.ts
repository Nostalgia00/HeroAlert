import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../data_model/heroes';
import { HeroListService } from '../../service/HeroListService';
import { SelectheroPage} from '../selecthero/selecthero';

@IonicPage()
@Component({
  selector: 'page-add-hero',
  templateUrl: 'add-hero.html',
})
export class AddHeroPage {

  /* create a hero object we can use */
  /* We don't need the key here - because when we write the object
  to Firebase - the Firebase database will create the key */
  heroRecord: Hero = {
    heroName: '',
    attribute1: '',
    attribute2: '',
    attribute3: ''

  };


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private hero: HeroListService) {
  }

  addHeroFromScreen(he: Hero)
  {
  	this.hero.addHero(he);
    this.navCtrl.pop();

  }



}

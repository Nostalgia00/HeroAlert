import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DisplayheroPage } from '../displayhero/displayhero';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { Hero } from '../../data_model/heroes';
import { HeroListService } from '../../service/HeroListService';
import { AddHeroPage } from '../add-hero/add-hero';

import { AntiHero } from '../../data_model/antiheroes';
import { AddAntiHeroPage } from '../add-anti-hero/add-anti-hero';
import { AntiHeroListService } from '../../service/AntiHeroListService';

import { Team } from '../../data_model/Teams';
import { AddTeamPage } from '../add-team/add-team';
import { TeamListService } from '../../service/TeamListService';


/**
 * Generated class for the SelectheroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecthero',
  templateUrl: 'selecthero.html',
})
export class SelectheroPage {

	// variables fort storing lists of heros, antiheros and teams
	ourHeroList$ :Observable<Hero[]>;
	ourAntiHeroList$ :Observable<AntiHero[]>;
	ourTeamList$ :Observable<Team[]>;

	// for stroing emergency data
	emergencyDangerLevel:number;
	EmAtt1:String;
	EmAtt2:String;
	EmAtt3:String;

	constructor(
		public myFirebaseDB: AngularFireDatabase,
		private heroListService: HeroListService,
		private antiheroListService: AntiHeroListService,
		private teamListService: TeamListService,
		public modalCtrl: ModalController,
		public navCtrl: NavController, 
		public navParams: NavParams) {

		//save emergency data to local variabes taken from navParams
		this.emergencyDangerLevel = this.navParams.get('ourParam');
		this.EmAtt1 = this.navParams.get('ourAtt1');
		this.EmAtt2 = this.navParams.get('ourAtt2');
		this.EmAtt3 = this.navParams.get('ourAtt3');

		console.log("The danger level is now " + this.emergencyDangerLevel); 
		console.log("Attribute1 is " + this.EmAtt1); 
		console.log("Attribute2 is " + this.EmAtt2); 
		console.log("Attribute3 is " + this.EmAtt3); 

		// uses the getHeroList method to access the list of heros in the firebase database
		this.ourHeroList$ = this.heroListService.getHeroList().snapshotChanges().pipe(
			map(changes =>
				changes.map(c => ({
					key: c.payload.key, ...c.payload.val()
				}))));
		
		// uses the getAntiHeroList method to access the list of antiheroes in the firebase database
		this.ourAntiHeroList$ = this.antiheroListService.getAntiHeroList().snapshotChanges().pipe(
			map(changes =>
				changes.map(c => ({
					key: c.payload.key, ...c.payload.val()
				}))));
		// uses the getTeamList method to access the list of teams in the firebase database
		this.ourTeamList$ = this.teamListService.getTeamList().snapshotChanges().pipe(
			map(changes =>
				changes.map(c => ({
					key: c.payload.key, ...c.payload.val()
				}))));

	}

	ionViewDidLoad() {
	    console.log('ionViewDidLoad SelectheroPage');
	}
	//return to the Home Page
	public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }
}



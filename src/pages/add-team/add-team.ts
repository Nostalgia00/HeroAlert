import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '../../data_model/Teams';
import { TeamListService } from '../../service/TeamListService';

@IonicPage()
@Component({
  selector: 'page-add-team',
  templateUrl: 'add-team.html',
})
export class AddTeamPage {

  /* create a team object we can use */
  /* We don't need the key here - because when we write the object
  to Firebase - the Firebase database will create the key */
  teamRecord: Team = {
    teamName: '',
    attribute1: '',
    attribute2: '',
    attribute3: ''

  };


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private team: TeamListService) {
  }

  addTeamFromScreen(tm: Team)
  {
  	this.team.addTeam(tm);
    this.navCtrl.pop();

  }



}

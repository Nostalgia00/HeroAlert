import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Emergency } from '../../data_model/emergencies';
import { EmergencyListService } from '../../service/EmergencyListService';
import {EmergencyPage} from '../emergency/emergency';

@IonicPage()
@Component({
  selector: 'page-add-emergency',
  templateUrl: 'add-emergency.html',
})
export class AddEmergencyPage {

  /* create an emergency object we can use */
  /* We don't need the key here - because when we write the object
  to Firebase - the Firebase database will create the key */
  emergencyRecord: Emergency = {
    emergencyName: '',
    attribute1: '',
    attribute2: '',
    attribute3: ''

  };


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private emergency: EmergencyListService) {
  }

  addEmergencyFromScreen(em: Emergency)
  {
  	this.emergency.addEmergency(em);
    this.navCtrl.pop();

  }



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { HomePage } from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map} from 'rxjs/operators/map';
import { Emergency } from '../../data_model/emergencies';
import { EmergencyListService } from '../../service/EmergencyListService';
import { AddEmergencyPage } from '../add-emergency/add-emergency';


/**
 * Generated class for the EmergencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  // variable fort storing list of emergencies
  ourEmergencyList$: Observable<Emergency[]>;  

  constructor(public navCtrl: NavController,  public navParams: NavParams,  public myFirebaseDB: AngularFireDatabase,    private emergencyListService: EmergencyListService) {
    
    /* containing new code for rxjs 6 - recent version */
    /* we need to use snapshotChanges - because we need to get the KEY for 
    every object in our collection */

    // uses the getEmegerncyList method to access the list of emergencies in the firebase database
    this.ourEmergencyList$ = this.emergencyListService.getEmergencyList().snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        ));
    
  }

  // navigate to Location PAge
public goToLocation()
  {
  	this.navCtrl.push(LocationPage);
  }
  //return to home page
  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

}

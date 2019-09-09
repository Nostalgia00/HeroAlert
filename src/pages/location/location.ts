import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectlocationPage } from '../selectlocation/selectlocation';
import { SelectheroPage } from '../selecthero/selecthero';
import { HomePage } from '../home/home';
import { Emergency } from '../../data_model/emergencies';


/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})


export class LocationPage {

  // for storing emergency data
  EmAtt1:String;
  EmAtt2:String;
  EmAtt3:String;
  factor:number=1;

  //data model for emergencies
  emergencyParameter: Emergency = {
    key: undefined,
    emergencyName: '',
    attribute1: undefined,
    attribute2: undefined,
    attribute3: undefined

  };  
  emergencyDangerLevel:number = 100; //base level is 100
  displayEmergencyDangerLevel:String; //display number, can be easily formated later

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // save emergency data to local variables taken from navParams
    this.emergencyParameter = this.navParams.get('emergencyRecord');
    this.EmAtt1 =  this.emergencyParameter.attribute1+"";
    this.EmAtt2 =  this.emergencyParameter.attribute2+"";
    this.EmAtt3 =  this.emergencyParameter.attribute3+"";
    

    //Assign emergency level based on attributes
    // some attributes have yet to be implemented

    //apocalypse    
    if(this.EmAtt1=="apocalypse"|| this.EmAtt2=="apocalypse"||this.EmAtt3=="apocalypse"){
      this.factor =5; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //fire
    if(this.EmAtt1=="fire"|| this.EmAtt2=="fire"||this.EmAtt3=="fire"){
      this.factor =1.5; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //legion
    if(this.EmAtt1=="legion"|| this.EmAtt2=="legion"||this.EmAtt3=="legion"){
      this.factor =2; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //mechanical
    if(this.EmAtt1=="mechanical"|| this.EmAtt2=="mechanical"||this.EmAtt3=="mechanical"){
      this.factor =1.2; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //ice
    if(this.EmAtt1=="ice"|| this.EmAtt2=="ice"||this.EmAtt3=="ice"){
      this.factor =1.5; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //mundane
    if(this.EmAtt1=="mundane"|| this.EmAtt2=="mundane"||this.EmAtt3=="mundane"){
      //for instances where mundane is the only attribute we want a greater reduction in level
      var count:number=0;
      if(this.EmAtt1==""){
         count++;
      }
      if(this.EmAtt2==""){
         count++;
      }
      if(this.EmAtt3==""){
         count++;
      }
      if(count>1){
        this.factor =0.1; //benifit when mundane is the only attribute
      }
      else{
        this.factor =0.5; //base benifit when mundane is not the ony attribute
      }
      count = 0;//rset count

      this.emergencyDangerLevel *= this.factor;
    }
    //xeno
    if(this.EmAtt1=="xeno"|| this.EmAtt2=="xeno"||this.EmAtt3=="xeno"){
      this.factor =3; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //crime
    if(this.EmAtt1=="crime"|| this.EmAtt2=="crime"||this.EmAtt3=="crime"){
      this.factor =1.1; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //kaiju
    if(this.EmAtt1=="kaiju"|| this.EmAtt2=="kaiju"||this.EmAtt3=="kaiju"){
      this.factor =2; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //subtle
    if(this.EmAtt1=="subtle"|| this.EmAtt2=="subtle"||this.EmAtt3=="subtle"){
      this.factor =0.5; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }
    //villian: Joker
    if(this.EmAtt1=="villian: Joker"|| this.EmAtt2=="villian: Joker"||this.EmAtt3=="villian: Joker"){
      this.factor =1.5; //base benifit

      this.emergencyDangerLevel *= this.factor;
    }

    console.log("Firebase Database Key" + this.emergencyParameter.key);
    console.log("The danger level is now " + this.emergencyDangerLevel); 
    console.log("Attribute1 is " + this.emergencyParameter.attribute1); 
    console.log("Attribute2 is " + this.emergencyParameter.attribute2); 
    console.log("Attribute3 is " + this.emergencyParameter.attribute3); 

    this.displayEmergencyDangerLevel = this.emergencyDangerLevel.toFixed(0); //removes decimals
    console.log("Display EDL is " + this.displayEmergencyDangerLevel); 

  }


  ionViewDidLoad() {    
      
    console.log('ionViewDidLoad LocationPage');
       

  }
  //navigate to the Select location page
  public goToSelectLocation()
  {
  	this.navCtrl.push(SelectlocationPage);
  }
  //navigate to the select hero page
  public goToSelectHero()
  {
  	this.navCtrl.push(SelectheroPage,
    {
      //saves emergency data in variables that are passed to navParams
      ourParam: this.emergencyDangerLevel,
      ourAtt1: this.emergencyParameter.attribute1,
      ourAtt2: this.emergencyParameter.attribute2,
      ourAtt3: this.emergencyParameter.attribute3

    }
    );
  }
  //return to the home page
  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

}

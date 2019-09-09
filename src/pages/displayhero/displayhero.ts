import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DispatchheroPage } from '../dispatchhero/dispatchhero';
import { SelectheroPage } from '../selecthero/selecthero';
import { HomePage } from '../home/home';
import { Hero } from '../../data_model/heroes';
import { AntiHero } from '../../data_model/antiheroes';
import { Team } from '../../data_model/Teams';
import { Emergency } from '../../data_model/emergencies';




/**
 * Generated class for the DisplayheroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-displayhero',
  templateUrl: 'displayhero.html',
})
export class DisplayheroPage {

  //data model for Hero, AntiHero and Team
   heroParameter: Hero = {
    key: undefined,
    heroName: '',
    attribute1: undefined,
    attribute2: undefined,
    attribute3: undefined
  };  
  antiheroParameter: AntiHero = {
    key: undefined,
    antiheroName: '',
    attribute1: undefined,
    attribute2: undefined,
    attribute3: undefined
  }; 
  teamParameter: Team = {
    key: undefined,
    teamName: '',
    attribute1: undefined,
    attribute2: undefined,
    attribute3: undefined
  };   

  // variables for hero data
  name:String;
  Att1:String;
  Att2:String;
  Att3:String;
  heroLevel:number=100;  //base hero level
  displayHeroLevel:String; //display number that can be easily formatted later
  factor:number=1; 

  // variables for emergency data
  EmAtt1:String;
  EmAtt2:String;
  EmAtt3:String;
  emergencyDangerLevel:number;


  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams

  ) {

    //emergency values and attributes from navParams
    this.emergencyDangerLevel = this.navParams.get('emergencyLevel');
    console.log("Emergency level " + this.emergencyDangerLevel);
    this.EmAtt1 = this.navParams.get('ourAtt1');
    this.EmAtt2 = this.navParams.get('ourAtt2');
    this.EmAtt3 = this.navParams.get('ourAtt3');

    //take hero, antihero or team data from namParams
    this.heroParameter = this.navParams.get('heroRecord');
    this.antiheroParameter = this.navParams.get('antiheroRecord');
    this.teamParameter = this.navParams.get('teamRecord');

    //determines which of the 3 categories have been selected
    if(this.heroParameter!=undefined){    
    console.log("Hero Database Key" + this.heroParameter.key);
    this.name =  this.heroParameter.heroName+"";
    this.Att1 =  this.heroParameter.attribute1+"";
    this.Att2 =  this.heroParameter.attribute2+"";
    this.Att3 =  this.heroParameter.attribute3+"";
    
    }
    else if(this.antiheroParameter!=undefined){    
      console.log("Antihero Database Key" + this.antiheroParameter.key);
      this.name =  this.antiheroParameter.antiheroName+"";
      this.Att1 =  this.antiheroParameter.attribute1+"";
      this.Att2 =  this.antiheroParameter.attribute2+"";
      this.Att3 =  this.antiheroParameter.attribute3+"";
    }
    else if(this.teamParameter!=undefined){
      console.log("Team Database Key" + this.teamParameter.key);
      this.name =  this.teamParameter.teamName+"";
      this.Att1 =  this.teamParameter.attribute1+"";
      this.Att2 =  this.teamParameter.attribute2+"";
      this.Att3 =  this.teamParameter.attribute3+"";
      this.heroLevel = 500; //base case for teams is higher
    }
    //Generate hero level based on attribute relationship model
    //first check hero attributes, specific emergency attributes will change the factor
    //some relationships have not yet been implemetned

    //fire
    if(this.Att1=="fire"|| this.Att2=="fire"||this.Att3=="fire"){
      if(this.EmAtt1=="fire"|| this.EmAtt2=="fire"||this.EmAtt3=="fire"){
        this.factor =1; //fire cancels fire
      }
      else if(this.EmAtt1=="ice"|| this.EmAtt2=="ice"||this.EmAtt3=="ice"){
        this.factor =2; //fire counters ice
      }
      else{
        this.factor =1.5; //base benifit
      }
      this.heroLevel *= this.factor;
    }

    //strong
    if(this.Att1=="strong"|| this.Att2=="strong"||this.Att3=="strong"){
      this.factor = 2;

      this.heroLevel *=this.factor;      
    }

    //intelligent
    if(this.Att1=="intelligent"|| this.Att2=="intelligent"||this.Att3=="intelligent"){
      if(this.EmAtt1=="mechanical"|| this.EmAtt2=="mechanical"||this.EmAtt3=="mechanical"){
        this.factor =2;  // intelligent counters mechanical    
      }
      else{
        this.factor =1.5;  // base benifit
      }
          //this check gets final say
      if(this.EmAtt1=="intelligent"|| this.EmAtt2=="intelligent"||this.EmAtt3=="intelligent"){
        this.factor =1;  //intelligent cancels intelligent 
      }
      this.heroLevel *=this.factor;
    }

    //xeno
    if(this.Att1=="xeno"|| this.Att2=="xeno"||this.Att3=="xeno"){
      if(this.EmAtt1=="xeno"|| this.EmAtt2=="xeno"||this.EmAtt3=="xeno"){
        this.factor =2; //xeno counters xeno
      }
      else{
        this.factor =1.5; // base benifit
      }
      this.heroLevel*=this.factor;
    }

    //mundane
    if(this.Att1=="mundane"|| this.Att2=="mundanne"||this.Att3=="mundane"){
      this.factor = 0.1;// base benifit

      this.heroLevel *=this.factor;
    }

    //crimefighting
    if(this.Att1=="crimefighting"|| this.Att2=="crimefighting"||this.Att3=="crimefighting"){
      if(this.EmAtt1=="crime"|| this.EmAtt2=="crime"||this.EmAtt3=="crime"){
        this.factor =2; //crimefighting counters crime
      }
      else{
        this.factor = 1.2;// base benifit
      }

      this.heroLevel *=this.factor;
    }

    //stealth
    if(this.Att1=="stealth"|| this.Att2=="stealth"||this.Att3=="stealth"){
      if(this.EmAtt1=="sublte"|| this.EmAtt2=="sublte"||this.EmAtt3=="sublte"){
        this.factor =5; //stealth counters subtle
      }
      else{
        this.factor = 1;// base benifit
      }

      this.heroLevel *=this.factor;
    }

    //rich
    if(this.Att1=="rich"|| this.Att2=="rich"||this.Att3=="rich"){
      this.factor = 1.2;// base benifit

      this.heroLevel *=this.factor;
    }
    //mechanical
    if(this.Att1=="mechanical"|| this.Att2=="mechanical"||this.Att3=="mechanical"){
      this.factor = 1.2;// base benifit

      this.heroLevel *=this.factor;
    }

    //fast
    if(this.Att1=="fast"|| this.Att2=="fast"||this.Att3=="fast"){
      this.factor = 1.5;// base benifit

      this.heroLevel *=this.factor;
    }

     //magic
    if(this.Att1=="magic"|| this.Att2=="magic"||this.Att3=="magic"){
      this.factor = 2;// base benifit

      this.heroLevel *=this.factor;
    }
    
     //insane
    if(this.Att1=="insane"|| this.Att2=="insane"||this.Att3=="insane"){
      if(this.EmAtt1=="sublte"|| this.EmAtt2=="sublte"||this.EmAtt3=="sublte"){
        this.factor=0.1; // insane is countered by sublte
      }
      else if(this.EmAtt1=="legion"|| this.EmAtt2=="legion"||this.EmAtt3=="legion"){
        this.factor=2; // insane is counters by legion
      }
      else{
        this.factor = 0.9;// base benifit
      }
      this.heroLevel *=this.factor;
    }


    // if Joker is the villain, batman is set to ideal level
    if(this.name=="Batman"&&(this.EmAtt1=="villain: Joker"|| this.EmAtt2=="villain: Joker"||this.EmAtt3=="villain: Joker")){
          console.log("Emergency level " + this.emergencyDangerLevel);
      this.heroLevel = this.emergencyDangerLevel;
    }
    console.log("The hero level is" + this.heroLevel);

    this.displayHeroLevel = this.heroLevel.toFixed(0);
    console.log("Display HL is " + this.displayHeroLevel); 

 
}
  // navigate to Dispatch hero Page
  public goToDispatchHero()
  {
  	this.navCtrl.push(DispatchheroPage);
  }
  // return to select hero page
  public goBack()
  {
    this.navCtrl.pop();
  }
  // return to home page
  public goToHome()
  {
  	this.navCtrl.push(HomePage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { EmergencyPage } from '../pages/emergency/emergency';
import { LocationPage } from '../pages/location/location';
import { SelectlocationPage } from '../pages/selectlocation/selectlocation';
import { SelectheroPage } from '../pages/selecthero/selecthero';
import { DisplayheroPage } from '../pages/displayhero/displayhero';
import { DispatchheroPage } from '../pages/dispatchhero/dispatchhero';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebase_environment } from '../environments/environments';
import { EmergencyListService } from '../service/EmergencyListService';
import { HeroListService } from '../service/HeroListService';
import { AddEmergencyPage } from '../pages/add-emergency/add-emergency';
import { AddHeroPage } from '../pages/add-hero/add-hero';
import { AntiHeroListService } from '../service/AntiHeroListService';
import { AddAntiHeroPage } from '../pages/add-anti-hero/add-anti-hero';
import { AddTeamPage } from '../pages/add-team/add-team';
import { TeamListService } from '../service/TeamListService';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmergencyPage,
    SelectlocationPage,
    SelectheroPage

  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase_environment),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmergencyPage,
    SelectlocationPage,
    SelectheroPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, EmergencyListService, HeroListService, AntiHeroListService, TeamListService
  ]
})
export class AppModule {}

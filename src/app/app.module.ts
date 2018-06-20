import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { LeaderProvider } from '../providers/leader/leader';
import { TeamProvider } from '../providers/team/team';
import { DetailsPage } from '../pages/details/details';
import { PlayerStatsProvider } from '../providers/player-stats/player-stats';


@NgModule({
  declarations: [
    MyApp,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaderProvider,
    TeamProvider,
    DetailsPage,
    PlayerStatsProvider,
  ]
})
export class AppModule {}

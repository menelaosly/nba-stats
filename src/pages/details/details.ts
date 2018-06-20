import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayerStats} from '../../model/PlayerStats';
import {PlayerL} from '../../model/Player';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  headers:any;
  player:PlayerL;
  team:string;
  playerInfo:PlayerStats[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.player=navParams.get("player");
    this.team=this.player.team;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}

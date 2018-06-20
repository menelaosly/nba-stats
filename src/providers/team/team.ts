import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the TeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamProvider {

  constructor(public http: Http) {
  }

  getTeams(){
    return this.http.get(' https://stats.nba.com/stats/commonTeamYears/?LeagueID=00')
    .map(data=>data.json());
  }

}

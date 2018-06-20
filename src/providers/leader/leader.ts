import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class LeaderProvider {
  baseUrl:any;
  json:any;
  constructor(private http:Http) {
    this.baseUrl='https://stats.nba.com/stats/leagueleaders/?SeasonType=Regular%20Season&SeasonID=00&PerMode=PerGame&Season=2017-18&Scope=RS&StatCategory=';
  }

  getLeaders(category){
    return this.http.get('https://stats.nba.com/stats/leagueleaders/?SeasonType=Regular%20Season&LeagueID=00&PerMode=PerGame&Season=2017-18&Scope=RS&StatCategory='+category)
    .map(data=>data.json());
  }



}

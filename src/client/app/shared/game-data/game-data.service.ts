import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Game } from './game';
import 'rxjs/add/operator/map';

@Injectable()
export class GameDataService {
	//Web API URL
	private dataUrl = 'http://gd2.mlb.com/components/game/mlb/year_2016/month_10/day_04/master_scoreboard.json'; 

	constructor(private http: Http) {}
	data: any;

	  get(value: any[]) {
      if(value[1].length < 2) {
        value[1] = '0' + value[1];
        console.log("leading 0 for day added");
      }

      if(value[0].length < 2) {
        value[0] = '0' + value[0];
        console.log("leading 0 for month added");
      }

    this.dataUrl = 'http://gd2.mlb.com/components/game/mlb/year_' + value[2] + '/month_' + value[1] + '/day_' + value[0] + '/master_scoreboard.json';
    return this.http.get(this.dataUrl)
                    .map((res: Response) => res.json().data.games)
                    .catch(this.handleError);
  }


  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

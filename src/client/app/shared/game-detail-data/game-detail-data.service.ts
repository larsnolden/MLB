import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GameDetailDataService {
	constructor(private http: Http) {}

	private detailDataUrl = "http://gd2.mlb.com/components/game/mlb/year_2016/month_10/day_04/gid_2016_10_04_balmlb_tormlb_1/boxscore.json";

	// try modyify url function as input ->
	get(url: string) {
    url = "http://gd2.mlb.com" + url + "/boxscore.json";
		return this.http.get(url)
                    .map((res: Response) => res.json().data)
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
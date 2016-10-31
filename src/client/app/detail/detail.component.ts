import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { GameDetailDataService } from '../shared/index';
import { Router, ActivatedRoute, Params } from '@angular/router';

 @Component ({
   moduleId: module.id,
   selector: 'sd-detail',
   providers: [GameDetailDataService],
   templateUrl: 'detail.component.html',
   styleUrls: ['detail.component.css']
 })

 export class DetailComponent {

 	constructor(
    public gameDetailDataService: GameDetailDataService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

 	boxscore: any[];
  errorMessage: string;

  specs: string[] = ['ab', 'r', 'h', 'rbi', 'bb', 'so', 'avg'];

 	ngOnInit() {
      this.route.params.forEach((params: Params) => {
      let id = params['id'];
      console.log(id);
      this.getData(id);
    });
 	}

 	getData(id: string) {
  	this.gameDetailDataService.get(id)
        .subscribe (scores => {
          this.boxscore = scores.boxscore;
          console.log(scores);
    });
  }     
	
}
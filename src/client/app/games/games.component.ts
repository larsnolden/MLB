import {Component, Input} from '@angular/core';
import { GameDataService } from '../shared/index';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


/**
 * This class represents the lazy loaded games Component.
 */

 @Component ({
 	 moduleId: module.id,
   selector: 'sd-games',
   providers: [GameDataService],
   templateUrl: 'games.component.html',
   styleUrls: ['games.component.css']
 })

 export class GamesComponent {

 	constructor(
    public gameDataService: GameDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  errorMessage: string;

  noGamesPlayed: boolean;

  games: any[];
  game: any;

  getCurrentDate()
  {
    var today = new Date(); 
    var cd = today.getDate();
    var cm = today.getMonth();
    var cy = today.getFullYear();
    return [cd, cm + 1, cy];
  }
  
  ngOnInit() {
    this.noGamesPlayed = false;
    this.getData(this.getCurrentDate());
  }

  onDateRecieved(value: any[]) {
    this.getData(value);
  }

  toDetails (game: any) {
    console.log(game);
    console.log(this.game);
    let link = ['/detail', game.game_data_directory];
    this.router.navigate(link);
  }

  // onSelect (game: any) {
  //   this.router.navigate(['/detail', game.game_data_directory]);
  //   console.log(game.away_team_name);
  //   console.log(game.away_team_city);
  //   console.log(game.game_data_directory);
  // }

  // genPicUrl (games: any[]) {
  //     for(game of games) {
  //       this.game.away_logo = 'http://mlb.mlb.com/mlb/images/team_logos/124x150/' + this.game.away_name_abbrev + '@2x.png';
  //       this.game.home_logo = 'http://mlb.mlb.com/mlb/images/team_logos/124x150/' + this.game.home_name_abbrev + '@2x.png';
  //       console.log(this.game.home_logo);
  //     }
  // }


  getData(value: any[]) {
    this.gameDataService.get(value)
         .subscribe (data => {
          this.noGamesPlayed = false;     
          if (typeof data.game === 'undefined') {
            this.games = null;
            this.noGamesPlayed = true;
            console.log('no game data!');
          }
          else if (typeof data.game.length === 'undefined'){
            this.games = [data.game];
            console.log('only one game');
          }
          else {
            this.games = data.game;
            console.log('got game data!');
          }
         });
  }
}
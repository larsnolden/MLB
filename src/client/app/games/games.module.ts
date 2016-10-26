import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';		//import component
import { SharedModule } from '../shared/shared.module'; //import shared modules

import { GameComponent } from './game/game.component';
import { DateComponent } from './date/date.component';

import { MaterialModule } from '@angular/material';


@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: [GamesComponent, GameComponent, DateComponent],
	exports: [GamesComponent, MaterialModule]
})

export class GamesModule {}
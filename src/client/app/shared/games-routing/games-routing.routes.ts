import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent }    from '../../games/games.component';
import { DetailComponent }  from '../../detail/detail.component';

export const GamesAppRoutes = [
	{ path: '', component: GamesComponent },
	{ path: 'detail/:id', component: DetailComponent }
];
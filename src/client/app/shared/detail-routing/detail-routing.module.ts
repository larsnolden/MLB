import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent }    from '../../games/games.component';
import { DetailComponent }  from '../../detail/detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'games',  component: GamesComponent },
      { path: 'detail/:id', component: DetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DetailRoutingModule { }
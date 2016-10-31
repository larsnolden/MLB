import { Routes } from '@angular/router';

//import my Routes
import { GamesRoutes } from './games/index';
import { DetailRoutes } from './detail/index';
import { GamesAppRoutes } from './shared/games-routing/index';

export const routes: Routes = [
  ...GamesRoutes,
  ...DetailRoutes,
  ...GamesAppRoutes
];

//Provided Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

//My Components
import { GamesModule } from './games/games.module';
import { DetailModule } from './detail/detail.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), GamesModule, DetailModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }

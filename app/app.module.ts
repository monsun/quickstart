import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroSearchComponent } from "./hero-search.component";
import { DashboardComponent } from "./dashboard.component";
import { HeroService } from "./hero.service";

import { routing } from "./app.routing";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      DashboardComponent,
      HeroDetailComponent,
      HeroSearchComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

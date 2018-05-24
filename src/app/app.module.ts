import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { FilmDetails } from './components/film/film-details.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
      AppComponent,
      FilmsComponent,
      FilmComponent,
      FilmDetails
  ],
  imports: [
      BrowserModule,
      RoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

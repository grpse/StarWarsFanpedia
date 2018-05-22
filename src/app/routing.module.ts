import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent },
    { path: 'films/:id', component: FilmComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}


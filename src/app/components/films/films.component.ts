import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Film } from '../../models/film';

@Component({
    selector: 'films-root',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnChanges {

    @Input() films: Film[];
    film_to_show: Film = null;

    ngOnChanges(changes: SimpleChanges): void {
        
        if (this.films !== changes.films.currentValue) {
            this.films = changes.films.currentValue;
        }
    }

    closeFilmDetails() : void {
        this.film_to_show = null;
    }

    selectedFilm(film:Film) : void {
        this.film_to_show = film;
        console.log(film);
    }
}


import {Component, Input} from '@angular/core';
import {FilmsService} from '../../services/films.service';
import {Film} from '../../models/film';
import {Character} from '../../models/character';

@Component({
  selector: 'film-root',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

    @Input() film: Film; 

    constructor() {}

}

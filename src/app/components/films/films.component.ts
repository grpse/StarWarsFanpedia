import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../models/film';

@Component({
  selector: 'films-root',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    title = 'Star Wars Films';
    films: [Film];
    sortBy: string;

    constructor(private filmsService: FilmsService) {}

    ngOnInit() {
        this.getFilms();
    }

    getFilms() {
        this.filmsService.getAll().subscribe(films => this.films = (<[Film]>films.results));
    }

    sortByEpisode() {
        this.films.sort((fa, fb) => fa.episode_id - fb.episode_id);
    }

    sortByReleaseDate() {
        this.films.sort((fa, fb) => {
            let faUnixtime = (new Date(fa.release_date)).getTime();
            let fbUnixtime = (new Date(fb.release_date)).getTime();
            return faUnixtime - fbUnixtime;
        })
    }
}


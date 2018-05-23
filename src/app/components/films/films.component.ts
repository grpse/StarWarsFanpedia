import { Component, OnInit } from '@angular/core';
import { FilmsService, FilmsResponse } from '../../services/films.service';
import { Film } from '../../models/film';

@Component({
  selector: 'films-root',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    title = 'Star Wars Films';
    films: Film[];
    sortBy: string;
    
    constructor(private filmsService: FilmsService) {
    }

    ngOnInit() : void {
        this.getFilms();
    }

    getFilms() : void {
        console.log(this);
        this.filmsService.getAll().subscribe( (films:FilmsResponse) => this.films = films.results);
    }

    sortByEpisode() : void {
        this.films.sort((fa, fb) => fa.episode_id - fb.episode_id);
    }

    sortByReleaseDate() : void {
        this.films.sort((fa, fb) => {
            let faUnixtime = (new Date(fa.release_date)).getTime();
            let fbUnixtime = (new Date(fb.release_date)).getTime();
            return faUnixtime - fbUnixtime;
        })
    }
}


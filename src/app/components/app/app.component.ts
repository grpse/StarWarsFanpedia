import { Component, OnInit } from '@angular/core';
import { FilmsService, FilmsResponse } from '../../services/films.service';
import { CharactersResponse, CharactersService } from '../../services/characters.service';
import { Film } from '../../models/film';
import { Character } from '../../models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private films:Film[];
  private characters:Character[];
  public filtered_films:Film[];
  
  constructor(private filmsService:FilmsService, private charactersService:CharactersService) {
  }

  ngOnInit() : void {
    this.getFilms();
  }

  getFilms() : void {   
    this.filmsService.getAll().subscribe( (films:FilmsResponse) => {
        this.films = films.results;
        this.filtered_films = this.films;

        this.films.forEach(film => {
          this.charactersService.getAllOfTheList(film.characters).subscribe((charactersData:Character[]) => film.characters_data = charactersData);
        });       
    });
  }

  filterByName(name:string) : void {
    console.log(name);

    console.log(this.films);

    if (name.length) {
      this.filtered_films = this.films.filter((f:Film) => {
        let includesFilmName = f.title.toLowerCase().includes(name.toLowerCase());
        let includesCharatersNames = this.checkIfCharacterNameIsPresentOnFilm(f, name);
        return includesFilmName || includesCharatersNames; 
      });
    }
    else {
      this.filtered_films = this.films;
    }
  }

  checkIfCharacterNameIsPresentOnFilm(film:Film, name:string) : boolean {
    if (film.characters_data) {
      return film.characters_data.filter(c => c.name.toLowerCase().includes(name.toLowerCase())).length > 0;
    }
    else {
      return false;
    }
  }
}

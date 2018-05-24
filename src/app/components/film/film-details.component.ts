import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Film } from '../../models/film';
import { Character } from '../../models/character';

@Component({
    selector: 'film-details',
    templateUrl: './film-details.component.html'
})
export class FilmDetails implements OnInit, OnChanges{


    @Input()
    public film: Film;
    public characters: Character[];

    constructor(private charactersService:CharactersService) {}

    ngOnInit(): void {

    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.film = changes.film.currentValue;

        if (this.film.characters_data)
            this.film.characters_data.forEach((character:Character) => {
                let characterPhoto = 'assets/characters/'+character.name.replace(' ', '_').toLowerCase()+'.jpeg';
                fetch(characterPhoto)
                    .then(r => {
                        character.photo = characterPhoto;
                        console.log(r);
                    })
                    .catch(e => character.photo = '');
            });
    }
}
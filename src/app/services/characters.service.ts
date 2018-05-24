import { Character } from '../models/character';
import { StarwarsService } from './starwars.service';
import { Injectable } from '@angular/core';
//import { Observable, Subject } from 'rxjs';
import { Observable, forkJoin } from 'rxjs'

export interface CharactersResponse {
    results:Character[];
}

@Injectable({ providedIn: 'root' })
export class CharactersService {

    constructor(private starwarsService: StarwarsService) {}

    public getAll() : Observable<CharactersResponse> {
        return this.starwarsService.getAllFrom<CharactersResponse>('people');
    }

    public getAllOfTheList(characters_url:string[]) : Observable<Character[]> {

        let allObservablesCharacters:Observable<Character>[] = [];

        for (let i = 0; i < characters_url.length; i++) {
            let chracterObservable = this.starwarsService.getByUrl<Character>(characters_url[i]);
            allObservablesCharacters.push(chracterObservable);
        }
        
        return forkJoin(allObservablesCharacters);
    }
}

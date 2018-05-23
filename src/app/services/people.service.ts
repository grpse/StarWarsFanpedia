import { Character } from '../models/character';
import { StarwarsService } from './starwars.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface CharactersResponse {
    results:Character[];
}

@Injectable({ providedIn: 'root' })
export class CharactersService {

    constructor(private starwarsService: StarwarsService) {}

    public getAll() : Observable<CharactersResponse> {
        return this.starwarsService.getAllFrom<CharactersResponse>('people');
    }
}

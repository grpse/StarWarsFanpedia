import { Character } from '../models/character';
import { StarwarsService } from './starwars.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharactersService extends StarwarsService {

    getAll() : Observable<[Character]> {
        return super.getAllFrom<Character>('people');
    }
}

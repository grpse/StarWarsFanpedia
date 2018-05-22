import { Film } from '../models/film';
import { StarwarsService } from './starwars.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmsService extends StarwarsService {

    public getAll() : Observable<[Film]> {
        return this.getAllFrom<Film>('films');
    }
}

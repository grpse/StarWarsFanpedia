import { Film } from '../models/film';
import { StarwarsService } from './starwars.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface FilmsResponse {
    results : Film[];
}

@Injectable({ providedIn: 'root' })
export class FilmsService {

    constructor(private starwarsService: StarwarsService) {}

    public getAll() : Observable<FilmsResponse> {
        return this.starwarsService.getAllFrom<FilmsResponse>('films');
    }
    
}

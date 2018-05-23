import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Film} from '../models/film';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface GetResponses {
    getAll();
}

@Injectable({ providedIn: 'root' })
export abstract class StarwarsService implements GetResponses {

    private apiUrl = 'https://swapi.co/api/';


    constructor(private http: HttpClient) {}

    public getAllFrom<T>(modelName:string) : Observable<T> {
        return this.http.get<T>(this.apiUrl+modelName);
    }
    
    public abstract getAll();
}

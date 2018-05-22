import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class StarwarsService {

    private apiUrl = 'https://swapi.co/api/';


    constructor(private http: HttpClient) {}

    public getAllFrom<Type>(modelName:string) : Observable<[Type]> {
        return this.http.get<[Type]>(this.apiUrl+modelName);
            // .pipe(tap(data => console.log(data)));
    }
}

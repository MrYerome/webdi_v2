import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diner} from "../models/diner";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {Places} from "../models/places";
import {Themes} from "../models/themes";
import {City} from "../models/city";

@Injectable({
    providedIn: 'root'
})
export class DinerServiceService {

    private baseUrl = 'http://localhost/webdi_v2/backend/public/api';

    constructor(private http: HttpClient) {
    }


    public getAllDiners(): Observable<Diner[]> {
        return this.http.get(`${this.baseUrl}/diners/getAllDiners`).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Diner.fromJson(jsonItem)),
            )
        );
    }

    public getAllPlaces(): Observable<Places[]> {
        return this.http.get(`${this.baseUrl}/places/getAllPlaces`).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Places.fromJson(jsonItem)),
            )
        );
    }

    public getAllThemes(): Observable<Themes[]> {
        return this.http.get(`${this.baseUrl}/themes/getAllThemes`).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Themes.fromJson(jsonItem)),
            )
        );
    }

    public createDiner(data): Observable<Diner> {

        return this.http.post <Diner> (`${this.baseUrl}/diners/create`, data);
    }

    public getDiner(id): Observable<Diner> {
        return this.http.get <Diner> (`${this.baseUrl}/diners/getDiner/${id}`);
    }

    public getCity(insee): Observable<City> {
        return this.http.get <City> (`${this.baseUrl}/cities/getCity/${insee}`);
    }

}

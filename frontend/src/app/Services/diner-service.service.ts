import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diner} from "../models/diner";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DinerServiceService {

  private baseUrl = 'http://localhost/webdi_v2/backend/public/api/diners';

  constructor(private http: HttpClient) { }


  public getAllDiners(): Observable<Diner[]> {
    return this.http.get(`${this.baseUrl}/getAllDiners`).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => Diner.fromJson(jsonItem)),
      )
    );
  }


}

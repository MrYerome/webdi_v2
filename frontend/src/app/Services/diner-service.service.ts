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

    public getOldDiners(): Observable<Diner[]> {
        return this.http.get <Diner[]> (`${this.baseUrl}/diners/getOldDiners`);
    }

    public getMyDiners(data): Observable<Diner[]> {
        return this.http.post <Diner[]>(`${this.baseUrl}/diners/myDiners`, data).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Diner.fromJson(jsonItem)),
            )
        );
    }

    public getMyOldDiners(data): Observable<Diner[]> {
        return this.http.post <Diner[]>(`${this.baseUrl}/diners/myOldDiners`, data).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Diner.fromJson(jsonItem)),
            )
        );
    }

    public getMyOwnDiners(data): Observable<Diner[]> {
        return this.http.post <Diner[]>(`${this.baseUrl}/diners/myOwnDiners`, data).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Diner.fromJson(jsonItem)),
            )
        );
    }

    public deleteDiners(data) {
        return this.http.post(`${this.baseUrl}/diners/delete`, data);
    }
  //
  // /**
  //  * Filtre
  //  */
  // filterTickets(): void {
  //   this.userEntities.map(entity => {
  //     if (entity['name'] === this.filter.product) {
  //       if (entity['children'] !== null) {
  //         this.userChildrenEntities = entity['children'].map(child => child.name);
  //       }
  //     }
  //   });
  //   this.tickets$ = this.ticketsLoaded$.map(
  //     tickets => tickets
  //     //  Filtre sur le status
  //       .filter(
  //         ticket => STATUS_MANAGER[this.filter.status].indexOf(ticket.status) >= 0
  //       )
  //       // Filtre sur le titre
  //       .filter(
  //         ticket => {
  //           if (isNaN(parseInt(this.filter.search, 10))) {
  //             return ticket.title.includes(this.filter.search) ;
  //           } else {
  //             return ticket.id.includes(this.filter.search) ;
  //           }
  //         }
  //       )
  //       // Filtre Produit
  //       .filter(ticket => {
  //         let result;
  //         if (this.pliEntities.includes(this.filter.product)) {
  //           this.userEntities.map(entity => {
  //             if (this.filter.product === entity['name'] && entity['children'] !== null) {
  //               entity['children'].map(child => {
  //                 if (ticket.produit !== undefined) {
  //                   if (ticket.produit === child.name || ticket.produit === entity['name']) {
  //                     result = ticket;
  //                   }
  //                 }
  //               });
  //             } else if (this.filter.product === entity['name'] && entity['children'] === null) {
  //               result = ticket.produit.includes(this.filter.product);
  //             }
  //           });
  //           return result;
  //         }
  //         return true;
  //       })
  //       // Filtre sur la société
  //       .filter(ticket => {
  //         if (this.pliGroups.includes(this.filter.group)) {
  //           return ticket.group.includes(this.filter.group);
  //         }
  //         return true;
  //       })
  //       // Filtre sur mes tickets
  //       .filter(ticket => {
  //         if (this.filter.myTickets === true) {
  //           return ticket.username === this.username;
  //         }
  //         return true;
  //       })
  //       // Filtre sur le produit
  //       .filter(ticket => {
  //         if (this.filter.product == '1') {
  //           return ticket;
  //         }
  //         if (this.filter.child !== 1) {
  //           return ticket.produit.includes(this.filter.child);
  //         }
  //         return true;
  //       }));
  //   this.store.dispatch(new TicketListModule.SuccessFilterTickets(this.filter));
  // }




}

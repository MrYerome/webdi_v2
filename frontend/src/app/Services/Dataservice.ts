import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost/webdi_v2/backend/public/api';

  constructor(private http: HttpClient) {
  }

  /**
   * Récupère tous les Users dans la BDD sous forme d'observable
   * Retourne un Type User définit dans le projet Angular
   */
  public getAllUsers(): Observable<User[]> {
    return this.http.get(`${this.baseUrl}/users/getAllUsers`).pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => User.fromJson(jsonItem)),
      )
    );
  }

  /**
   * Récupère un User dans la BDD sous forme d'observable
   * Retourne un Type User définit dans le projet Angular
   */
  public getUser(id): Observable<User> {
    return this.http.get < User > (`${this.baseUrl}/users/getUser/${id}`).pipe();
    // return this.http.get(`${this.baseUrl}/profiles/getProfile/${id}`).pipe(
    //   map(
    //     ((user: User) => user,
    //   )
    // )
  }

  /**
   * Véridie que le login n'est pas pris quand un utilisateur veut créer son compte
   * @param login
   */
  public isUserLoginExist(login){
    return this.http.get(`${this.baseUrl}/users/isUserExist/${login}`);
  }

  /**
   * Envoie les données d'identification login / password
   * @param data
   */
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  /**
   * Envoie un lien pour refaire son mot de passe
   * @param data
   */
  sendPasswordResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }

  /**
   * envoie les données pour changer le mot de passe
   * @param data
   */
  changePassword(data){
    return this.http.post(`${this.baseUrl}/resetPassword`, data)
  }

  /**
   * récupère les infos de profil d'un user grâce à lid du user
   * @param id
   */
  profile(id) {
    return this.http.get(`${this.baseUrl}/profiles/getProfile/${id}`);
  }

// Pas utile a priori
  // test(data) {
  //   return this.http.post(`${this.baseUrl}/test`, data);
  // }

  /**
   * Crée un nouveau user après son identification
   * @param data
   */
  signup(data) {
    return this.http.post(`${this.baseUrl}/users/create`, data);
  }

  /**
   * envoi du mail pour activer le compte
   * @param data
   */
  sendMailAfterSignup(data) {
    console.log(data);
    return this.http.post(`${this.baseUrl}/sendMailAfterSignup`, data)
  }

  /**
   * Active le compte : va modifier la BDD en vérifiant que le token envoyé par mail correspond à celui dans la BDD
   * @param token
   */
  activation(token){
    return this.http.get(`${this.baseUrl}/activation/${token}`)
  }

  /**
   * Mise à jour des informations du profil users
   * @param data
   */
  updateUser(data) {
    console.log(data);
    return this.http.post(`${this.baseUrl}/users/update`, data);
  }

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
  //
  //
  //
  //
}

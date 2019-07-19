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

}

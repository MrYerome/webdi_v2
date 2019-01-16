import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';
@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();


  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
    localStorage.setItem('Auth', value.toString());
  }



  constructor(private Token: TokenService) { }

}

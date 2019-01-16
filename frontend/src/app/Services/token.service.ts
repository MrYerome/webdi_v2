import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
 // private iss =null;
  private iss = {
    // login: 'http://localhost:8000/api/login',
    // signup: 'http://localhost:8000/api/signup'
     login: 'http://localhost/webdi_v2/backend/public/api/login',
     signup: 'http://localhost/webdi_v2/backend/public/api/signup'
  };

  constructor() { }

  handle(token) {
    console.log("définition du token : " + token);
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    console.log("token : " + token);
    const payload = token.split('.')[1];
    console.log ("définition du payload : " + payload);
    return this.decode(payload);
  }

  decode(payload) {
console.log("test payload : " + payload);
   //  return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}

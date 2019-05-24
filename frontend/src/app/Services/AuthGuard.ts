import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AfterLoginService} from "./after-login.service";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {

  base_url: string;

  constructor(private router: Router
    , private authService: AuthService) {}

  /**
   * Vérifie que l'on a à faire à un User qui s'est authentifié
   */
  canActivate() {
    if (this.authService.isAuthenticated()) {
      // Si authentifié, accès à la page
      return true;
    }

    // Sinon, redirection vers la page forbidden
    this.router.navigate(['/forbidden']);
    return false;

  }


}

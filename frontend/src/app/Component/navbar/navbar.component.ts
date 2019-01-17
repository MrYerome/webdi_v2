import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    console.log("connectée ? : " + this.Auth.authStatus.subscribe(value => this.loggedIn = value));
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Auth.changeAuthStatus(false);
    localStorage.setItem('login', null);
    this.router.navigateByUrl('/accueil');
  }


}

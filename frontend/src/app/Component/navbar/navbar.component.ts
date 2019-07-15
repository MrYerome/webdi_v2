import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
      '(document:click)': 'hideDropdown($event)',
  },
})
export class NavbarComponent implements OnInit {
    public showDropdown:boolean = false;

    public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private _eref: ElementRef
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => { this.loggedIn = value; console.log(value); });
    this.showDropdown = false;
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Auth.changeAuthStatus(false);
    sessionStorage.clear();
    this.router.navigateByUrl('/accueil');
  }

  hideDropdown($e) {
    if (!this._eref.nativeElement.contains(event.target)) {
        this.showDropdown = false;
    } // or some similar check
  }


}

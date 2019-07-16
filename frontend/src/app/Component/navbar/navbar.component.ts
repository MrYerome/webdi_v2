import {Component, ElementRef, NgModule, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../Services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ConnexionComponent} from '../connexion/connexion.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
      '(document:click)': 'hideDropdown($event)',
  },
})


export class NavbarComponent implements OnInit {
    @ViewChild('dropdownMyAccount') dropdownMyAccount;
    public showDropdown:boolean = false;

    public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private _eref: ElementRef,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => { this.loggedIn = value; console.log(value); });
    this.showDropdown = false;
  }

  logout(event: MouseEvent) {
    this.Auth.changeAuthStatus(false);
    sessionStorage.clear();
    this.router.navigateByUrl('/accueil');

  }

  hideDropdown($e) {

    if (!this.dropdownMyAccount.nativeElement.contains(event.target)) {
        this.showDropdown = false;
    }
  }

    open() {
        const modalRef = this.modalService.open(ConnexionComponent);
    }


}

import { Component, OnInit } from '@angular/core';
import {Diner} from "../../models/diner";
import {DinerServiceService} from "../../Services/diner-service.service";
import {Router} from "@angular/router";
import {nextContext} from "@angular/core/src/render3";
import {ConnexionComponent} from "../connexion/connexion.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  diners: Diner[];
    public loggedIn: boolean;
  constructor( private Auth: AuthService,
               private Data: DinerServiceService,
               private  router: Router,
               private modalService: NgbModal) {}

  ngOnInit() {
      this.Auth.authStatus.subscribe(value => { this.loggedIn = value; console.log(value); });
    this.Data.get3FirstDiner().subscribe(
        (diners: Diner[]) => {this.diners = diners; } );
  }
    /**
     * Au clic sur un diner, ouverture d'une nouvelle page avec les specs du diner
     * @param d
     */
    selectDiner(d) {
        console.log(d);
        this.router.navigate(['/diners/view', d]);
    }

    redirectToOrganize() {
        if (!this.loggedIn) {
            this.open('/diners/create');
        } else {
            this.router.navigateByUrl('/diners/create');
        }
    }

    open(redirectPage: string = 'false') {
        const modalRef = this.modalService.open(ConnexionComponent);
        modalRef.componentInstance.redirect = redirectPage;

    }
}

import { Component, OnInit } from '@angular/core';
import {Diner} from "../../models/diner";
import {DinerServiceService} from "../../Services/diner-service.service";
import {Router} from "@angular/router";
import {nextContext} from "@angular/core/src/render3";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  diners: Diner[];

  constructor( private Data: DinerServiceService,
    private  router: Router) {}

  ngOnInit() {
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
}

import { Component, OnInit } from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listold-diners',
  templateUrl: './listold-diners.component.html',
  styleUrls: ['./listold-diners.component.css']
})
export class ListoldDinersComponent implements OnInit {
  diners: Diner[];
  constructor(private Data: DinerServiceService,
              private router: Router) { }

  ngOnInit() {

    this.Data.getOldDiners().subscribe(
        value => {this.diners = value; },
        error => { console.log(error); },
        () => { console.log(this.diners ); }
    );
  }

    selectDiner(d) {
        console.log(d);
        this.router.navigate(['/diners/view', d]);
    }

}

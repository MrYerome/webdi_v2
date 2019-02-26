import { Component, OnInit } from '@angular/core';
import {Diner} from "../../../models/diner";
import {DataService} from "../../../Services/Dataservice";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-diners',
  templateUrl: './list-diners.component.html',
  styleUrls: ['./list-diners.component.css']
})
export class ListDinersComponent implements OnInit {
diners : Diner[];

  constructor(private Data : DinerServiceService,
  private router : Router) { }

  ngOnInit() {




this.Data.getAllDiners().subscribe(
  diners => {this.diners = diners},
  error => {
    console.log(error);
  },
  () => {
    console.log(this.diners);
  }

)
  }

  selectDiner(d) {
    this.router.navigate(['/diner/view',d]);
  }
}

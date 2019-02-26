import { Component, OnInit } from '@angular/core';
import {DinerServiceService} from "../../../Services/diner-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Diner} from "../../../models/diner";

@Component({
  selector: 'app-view-diner',
  templateUrl: './view-diner.component.html',
  styleUrls: ['./view-diner.component.css']
})
export class ViewDinerComponent implements OnInit {
  id: string;
  diner : Diner;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data : DinerServiceService
  ) { }

  ngOnInit() {
    this.recupDiner();
  }

  recupDiner() {
    console.log("recp diner");
    this.id = this.route.snapshot.paramMap.get('id');
    this.Data.getDiner(this.id).subscribe(
      data => {
      console.log(data);
      this.diner = data
    });
  }

}

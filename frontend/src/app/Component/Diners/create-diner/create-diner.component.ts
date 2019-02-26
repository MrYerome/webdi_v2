import {Component, Input, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Places} from "../../../models/places";

@Component({
  selector: 'app-create-diner',
  templateUrl: './create-diner.component.html',
  styleUrls: ['./create-diner.component.css']
})
export class CreateDinerComponent implements OnInit {
  //@Input() diner : Diner = null;
  constructor(private Data: DinerServiceService) {
  }

  public diner = {};
  public places: Places[];

  ngOnInit() {
    this.Data.getAllPlaces().subscribe(
      places => {
        this.places = places
      },
      error => {
        console.log(error);
      },
      () => {
        console.log(this.places);
      }
    );



  };

  onSubmit() {
    console.log('form envoye');
    // console.log(this.user);
    // this.Data.update(this.user)
    //   .subscribe(()=>this.goBack());
  }

}

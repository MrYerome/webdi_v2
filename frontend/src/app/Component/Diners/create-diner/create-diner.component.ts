import {Component, Input, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Places} from "../../../models/places";
import {Themes} from "../../../models/themes";


@Component({
  selector: 'app-create-diner',
  templateUrl: './create-diner.component.html',
  styleUrls: ['./create-diner.component.css']
})
export class CreateDinerComponent implements OnInit {
  //@Input() diner : Diner = null;
  constructor(private Data: DinerServiceService, ) {
  }
   time = {hour: 13, minute: 30};
  dateDiner;
  public diner = {};
  public places: Places[];
public themes : Themes[];

  ngOnInit() {
    //console.log(this.dateDiner);
    //on récupère les lieux
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

    //on récupère les thèmes
    this.Data.getAllThemes().subscribe(
      themes => {
        this.themes = themes
      },
      error => {
        console.log(error);
      },
      () => {
        console.log(this.themes);
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

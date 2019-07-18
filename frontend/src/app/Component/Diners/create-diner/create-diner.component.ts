import {Component, Input, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Places} from "../../../models/places";
import {Themes} from "../../../models/themes";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-diner',
  templateUrl: './create-diner.component.html',
  styleUrls: ['./create-diner.component.css']
})
export class CreateDinerComponent implements OnInit {
  //@Input() diner : Diner = null;
  constructor(private Data: DinerServiceService,
              private router: Router) {
  }

  time = {hour: 19, minute: 30};
  dateDiner;
  public diner = {
    title: null,
    description: null,
    dateDiner: null,
    time: {hour: 19, minute: 30},
    date: null,
    price: null,
    maxMembers: null,
    id_Places: null,
    id_Themes: null,
    id_Organisator: null
  };
  public places: Places[];
  public themes: Themes[];
  public error = [];

  ngOnInit() {
    // on récupère les lieux
    this.Data.getAllPlaces().subscribe(
      places => {
        this.places = places;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log(this.places);
      }
    );

    // on récupère les thèmes
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
  }

  onSubmit() {
    // on récupère l'utilisateur connecté
    this.diner.id_Organisator = sessionStorage.getItem('id').toString();
    // formattage de la date
    this.diner.date = `${this.diner.dateDiner.year}-${this.diner.dateDiner.month}-${this.diner.dateDiner.day} ${this.diner.time.hour}:${this.diner.time.minute}:00`;
    // creation du diner`
    this.Data.createDiner(this.diner).subscribe(
      data => {
        this.handleResponse(data);
      },
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log("success");
    this.router.navigate(['/diners/view/', data.id]);
  }

  handleError(error) {
    console.log("erreur");
    console.log(error);
    this.error = error.error.errors;
  }
}

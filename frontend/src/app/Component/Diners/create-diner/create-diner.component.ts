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
              private router : Router) {
  }

  time = {hour: 13, minute: 30};
  dateDiner;
  public diner = {
    title: null,
    description: null,
    dateDiner : null,
    time : {hour: 13, minute: 30},
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
    //console.log('form envoye');
    this.diner.id_Organisator = sessionStorage.getItem('id').toString();
    this.diner.date = this.diner.dateDiner.year + "-" + this.diner.dateDiner.month + "-" +
      this.diner.dateDiner.day + " " + this.diner.time.hour + ":" + this.diner.time.minute + ":00";
    console.log("titre" + this.diner.title);
    console.log("description" + this.diner.description);
    console.log("date " + this.diner.date);
    console.log("dateDiner " + this.diner.dateDiner.date);
    console.log("dateDiner " + this.diner.dateDiner.data);
    console.log("dateDiner " + this.diner.dateDiner.currentMonth);
    console.log("dateDiner " + this.diner.dateDiner.selected);
    console.log("dateDiner " + this.diner.dateDiner.year);
    console.log("dateDiner " + this.diner.dateDiner.day);
    console.log("time " + this.diner.time.hour);
    console.log("prix " + this.diner.price);
    console.log("maxMember " + this.diner.maxMembers);
    console.log("organisator " + this.diner.id_Organisator);
    console.log("place " + this.diner.id_Places);
    console.log("theme " + this.diner.id_Themes);
    this.Data.createDiner(this.diner).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    // this.Data.update(this.user)
    //   .subscribe(()=>this.goBack());
  }

  handleResponse(data) {
    console.log("success");
    // this.Data.sendMailAfterSignup(this.form).subscribe();
   // this.router.navigateByUrl('/accueil');
  }

  handleError(error) {
    console.log("erreur");
    console.log(error);
    this.error = error.error.errors;
  }
}

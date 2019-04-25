import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Diner} from "../../../models/diner";
import {Places} from "../../../models/places";
import {City} from "../../../models/city";
import {Usersdiners} from "../../../models/usersdiners";

@Component({
  selector: 'app-view-diner',
  templateUrl: './view-diner.component.html',
  styleUrls: ['./view-diner.component.css']
})
export class ViewDinerComponent implements OnInit {
  diner: Diner;
  city: City;

  public isSubscribe: boolean = false;


  public userid: string;
  public id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data: DinerServiceService) {
  }

  ngOnInit() {
    this.getDiner();
    this.userid = sessionStorage.getItem('id').toString();
    console.log(this.userid);

  }


  getDiner() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.id = this.route.snapshot.paramMap.get('id');
    }

    this.Data.getDiner(this.id).subscribe(
      value => {
        console.log(value);
        this.diner = value;
        console.log(this.diner);
        this.Data.getCity(this.diner.place.insee_Cities).subscribe(
          value1 => {
            this.city = value1[0];
          });
        this.verifIsSubscribe(this.diner);
      },
      error => {
        console.log(error);
      });
  }


  verifIsSubscribe(diner) {
    console.log(diner);
    for (let ud of this.diner.usersdiners) {
      if (ud.id_Users){
        this.isSubscribe = true;
      }
    }
  }

  editDiner(id) {
    this.router.navigate([`/diners/edit`, id]);
  }

  deleteDiner() {
    const data = {
      user_id: this.userid,
      diner_id: this.id,
    };
    console.log(data);
    this.Data.deleteDiners(data).subscribe(
      value => {
        console.log(value);
      },
      error1 => {
        console.log(error1);
      },
    );

  }

  subscribeDiner(idDiner) {
    const data = {
      id_Users: this.userid,
      id_Diners: idDiner,
    };
    console.log(data);
    this.Data.subscribeDiner(data).subscribe(
      value => {
        console.log(value);
        this.handleSuccess(idDiner)
      },
      error1 => {
        console.log(error1);
      },
    );
  }

  unsubscribeDiner(idDiner) {
    const data = {
      id_Users: this.userid,
      id_Diners: idDiner,
    };
    console.log(data);
    this.Data.unsubscribeDiner(data).subscribe(
      value => {
        console.log(value);
        this.handleSuccessUnsuscribe(idDiner)
      },
      error1 => {
        console.log(error1);
      },
    );
  }

  handleSuccess(data) {
    this.isSubscribe = true;
    //this.router.navigate(['/diners/view'], data);
  }

  handleSuccessUnsuscribe(data){
    this.isSubscribe = false;
  }
}

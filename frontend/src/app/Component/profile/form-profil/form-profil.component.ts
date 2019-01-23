import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";
import {typeAlias} from "@babel/types";

@Component({
  selector: 'app-form-profil',
  templateUrl: './form-profil.component.html',
  styleUrls: ['./form-profil.component.css']
})
export class FormProfilComponent implements OnInit {
  @Input() user: User;
  public users: User[];

  public error = null;


  constructor(private route : ActivatedRoute,
              private router: Router,
              private Data: DataService) {

  }

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    console.log(typeof(id));
    console.log(typeof(sessionStorage.getItem("id")));
    console.log(id);
    console.log(sessionStorage.getItem("id"));
    if (id==sessionStorage.getItem("id")){
      console.log("Ok");
      this.Data.getUser(id).subscribe(
        value =>{
          console.log(value); this.user = value},
        error => {
          console.log('erreur ');
        },
        () => {
          console.log(this.user.login);
          console.log(this.user.name);
          console.log(this.user.usertypes.label);
        }
      )
    }
    else {
      console.log("KO");
      this.router.navigateByUrl('/accueil');
    }
    //
    // this.Data.getAllProfiles().subscribe(
    //   users => this.users = users,
    //   error => {
    //     console.log('erreur ');
    //   },
    //   () => {
    //     console.log(this.users);
    //   }
    // )


  }

}

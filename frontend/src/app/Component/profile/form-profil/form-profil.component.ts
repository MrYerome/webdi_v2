import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../user";
import {Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-form-profil',
  templateUrl: './form-profil.component.html',
  styleUrls: ['./form-profil.component.css']
})
export class FormProfilComponent implements OnInit {
  @Input() user: User;
  public users: User[];

  public error = null;
  public id = 4;

  constructor(private router: Router,
              private Data: DataService) {
  }

  ngOnInit() {
    this.Data.getAllProfiles().subscribe(
      users => this.users = users,
      error => {
        console.log('erreur ');
      },
      () => {
        console.log(this.users);
      }
    )

    this.Data.getUser(this.id).subscribe(
      value =>{
        console.log(value); this.user = value[0]},
      error => {
        console.log('erreur ');
      },
      () => {
        console.log(this.user.login);
        console.log(this.user.profile.name);
        console.log(this.user.usertypes.label);
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  users: User[];
  login: string;

  constructor(private router: Router,
              private Data: DataService) {
  }

  ngOnInit() {
    this.Data.getAllUsers().subscribe(
      users => this.users = users,
      error => {
        console.log('erreur ');
      },
      () => {
        console.log(this.users);
      }
    )
  }

  selectProfile(d){
    console.log(d);
    this.router.navigate(['/profile/view',d]);
  }

}

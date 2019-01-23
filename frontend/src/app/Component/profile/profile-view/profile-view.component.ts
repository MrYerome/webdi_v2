import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  user: User = null;
  users: User[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data: DataService) {
    // this.users = JSON.parse(sessionStorage.getItem('user'));

    this.Data.getAllUsers().subscribe(
      value => {
        console.log(value);
        this.users = value
      },
      error => {
        console.log('erreur ');
      },
      // () => {
      //   console.log(this.user.login);
      //   console.log(this.user.name);
      //   console.log(this.user.usertypes.label);
      // }
    )

    // this.users = this.Data.getAllUsers().subscribe(data => this.users=data);

    this.Data.getUser(13).subscribe(
      value =>{
         this.user = value;
         console.log(this.user);},
      error => {
        console.log('erreur ');
      },
    () => {
      console.log(this.user.login);
      console.log(this.user.name);
      console.log(this.user.usertypes.label);
    }
    )

    // console.log(JSON.parse(sessionStorage.getItem('user')));
    //let id=+this.route.snapshot.paramMap.get('id');
    // this.users = JSON.parse(sessionStorage.getItem('user'));
    // console.log(this.users);
  }

  ngOnInit() {
    this.recupProfile();
  }

  recupProfile() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.Data.getUser(id).subscribe(data => this.user = data);

  }

  selectProfile(d) {
    console.log(d);
    this.router.navigate(['/profile/edit', d]);
  }

}

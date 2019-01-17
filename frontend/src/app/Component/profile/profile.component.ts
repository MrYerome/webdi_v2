import { Component, OnInit } from '@angular/core';
import{UserProfile} from "../../userProfile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:string;
  userProfile : UserProfile;
  login : string;

  constructor() {
    this.user = JSON.parse(sessionStorage.getItem('user')) ;
    console.log(this.user[0].login);
    this.userProfile.login = this.user[0].login.toString();
   // this.userProfile.login = JSON.parse(sessionStorage.getItem('login')) ;
    this.login = this.userProfile.login;
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:string;
  userProfiles : User[];
  login : string;

  constructor() {
    this.userProfiles = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {

  }

}

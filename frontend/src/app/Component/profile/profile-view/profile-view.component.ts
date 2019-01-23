import { Component, OnInit } from '@angular/core';
import {User} from "../../../user";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  users : User[];
  login : string;
  // name:string;

  constructor() {
    console.log(JSON.parse(sessionStorage.getItem('user')));
    this.users = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {

  }

}

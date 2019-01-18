import { Component, OnInit } from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users : User[];
  login : string;

  constructor() {
    console.log(JSON.parse(sessionStorage.getItem('user')));
    this.users = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
login : string;
  constructor() {
    this.login = localStorage.getItem('login');
  }

  ngOnInit() {

  }

}

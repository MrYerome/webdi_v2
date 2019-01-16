import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from "../../Services/token.service";
import {DataService} from "../../Services/Dataservice";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    login: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private Data: DataService,
    private Http:HttpClient,
    private router: Router,
  ) { }

  onSubmit() {
    this.Data.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error=>this.handleError(error)
    );
  }
  handleResponse(data) {
    console.log(data);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    console.log("test3");
    console.log(error);

    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}

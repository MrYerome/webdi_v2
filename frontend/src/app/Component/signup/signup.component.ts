import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../../Services/Dataservice";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../Services/token.service";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    firstName:null,
    email: null,
    login: null,
    password: null,
    password_confirmation: null,
    specAlim: null
  };
  public error = [];

  constructor(
    private Data: DataService,
    private Http:HttpClient,
    private router: Router,
    private Auth : AuthService
  ) { }

  onSubmit() {
    this.Data.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error=>this.handleError(error)
    );
  }
  handleResponse(data) {
    console.log(data);
    // this.Data.loginAfterSignUp(this.form).subscribe();
    this.router.navigateByUrl('/accueil');
  }

  handleError(error) {
    console.log("test3");
    console.log(error);

    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}

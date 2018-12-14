import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private Data: DataService,
    private Http:HttpClient,
    //private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.Data.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
  }
  // handleResponse(data) {
  //   this.Token.handle(data.access_token);
  //   this.router.navigateByUrl('/profile');
  // }
  //
  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}

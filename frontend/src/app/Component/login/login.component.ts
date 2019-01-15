import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from "../../Services/token.service";
import {AuthService} from "../../Services/auth.service";
import { Router } from '@angular/router';
import {DataService} from "../../Services/Dataservice";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private http:HttpClient,
    private Data: DataService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) {}

  onSubmit() {
    this.Data.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}

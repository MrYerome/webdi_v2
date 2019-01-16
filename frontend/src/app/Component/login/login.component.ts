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
    login: null,
    password: null
  };

  public error = null;

  constructor(
    private http:HttpClient,
    private Data: DataService,
    private router: Router,
  ) {}

  onSubmit() {
    console.log(this.form);
    this.Data.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    var userLogin = this.form.login;
    localStorage.setItem('userLogin', userLogin);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}

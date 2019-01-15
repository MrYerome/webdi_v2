import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
    private Data: DataService
    // private Token: TokenService,
    // private router: Router,
    // private Auth: AuthService
  ) { }

  onSubmit() {
    console.log("something");

    this.Data.login(this.form).subscribe(
      data=>console.log(data),
      error => this.handleError(error)
    );
    // return this.http.post('url', this.form).subscribe(
    //   data=>console.log(data),
    //   error=>console.log(error)
    // );
    // this.Data.login(this.form).subscribe(
    //   data => this.handleResponse(data),
    //   error => this.handleError(error)
    // );
  }

  handleError(error) {
    this.error = error.error.error;
  }
  // handleResponse(data) {
  //   this.Token.handle(data.access_token);
  //   this.Auth.changeAuthStatus(true);
  //   this.router.navigateByUrl('/profile');
  // }
  //

  ngOnInit() {
  }

}

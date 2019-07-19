import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
    firstName: null,
    email: null,
    login: null,
    password: null,
    password_confirmation: null,
    specAlim: null
  };

  public isUserLoginDoesNotExist: boolean = false;

  public form2 = {
    email: null,
  };
  public error = [];

  constructor(
    private Data: DataService,
    private Http: HttpClient,
    private router: Router,
    private Auth: AuthService
  ) {
  }

  onSubmit() {
    console.log(this.form);
    this.Data.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Data.sendMailAfterSignup(this.form).subscribe();
    this.router.navigateByUrl('/accueil');
  }

  handleError(error) {
    console.log("erreur");
    console.log(error);

    this.error = error.error.errors;
  }

  ngOnInit() {
  }

  verifLogin(login) {
    if (login != "") {
      this.Data.isUserLoginExist(login).subscribe(
        data => {
          this.testResponse(data);

        },
        error => this.handleError(error)
      );
    }
  }

  testResponse(data) {
    console.log("data" + data +"data");
    if (data == null) {
      this.isUserLoginDoesNotExist = true;
    } else {
      this.isUserLoginDoesNotExist = false;
    }
    console.log("isUserLoginExist " + this.isUserLoginDoesNotExist);
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../Services/Dataservice";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {typeSourceSpan} from "@angular/compiler";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public form = {
    login: null,
    password: null
  };
  public error = null;

  constructor(
    private http:HttpClient,
    private Data: DataService,
    private router: Router,
    private Auth : AuthService
  ) {  }

  onSubmit() {
    this.Data.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    if (typeof(data.message) !== 'undefined') {
      this.handleError(data.message);
    }
    else {
      console.log(data[0]["id"]);
      sessionStorage.setItem('user',JSON.stringify(data));
      sessionStorage.setItem('id',JSON.stringify(data[0]["id"]));
      this.Auth.changeAuthStatus(true);
      this.router.navigateByUrl('/accueil');
    }
}

  handleError(error) {
    this.error = "Le login et le mot de passe ne coincident pas.";
  }
  ngOnInit() {
  }

}

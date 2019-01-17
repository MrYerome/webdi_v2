import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../Services/Dataservice";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";


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
  ) {}

  onSubmit() {
    console.log(this.form);
    localStorage.setItem('login', this.form.login);
    this.Data.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    if (typeof(data.message) !== 'undefined') {
      this.handleError(data.message);
    } else {
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}

  handleError(error) {
    this.error = "Le login et le mot de passe ne coincident pas.";
  }
  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from "../../Services/Dataservice";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../Services/token.service";
import {AuthService} from "../../Services/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConnexionComponent} from "../connexion/connexion.component";

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
  public isPasswordConfirm: boolean = true;
  public isUserLoginDoesNotExist: boolean = false;

  public form2 = {
    email: null,
  };
  public error = [];

  constructor(
    private Data: DataService,
    private Http: HttpClient,
    private router: Router,
    private Auth: AuthService,
    private modalService: NgbModal
  ) {
  }

  onSubmit() {

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

  open(redirectPage: string = 'false') {
      const modalRef = this.modalService.open(ConnexionComponent);
      modalRef.componentInstance.redirect = redirectPage;

  }

  chackPasswordConfirm() {
      if (this.form.password != null && this.form.password_confirmation != null) {
        this.isPasswordConfirm = (this.form.password === this.form.password_confirmation)
      }
    // if (this.form.password)
  }

}

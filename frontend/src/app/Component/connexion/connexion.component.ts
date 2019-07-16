import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../Services/Dataservice";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {typeSourceSpan} from "@angular/compiler";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


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
  public errorActive = null;
  public bErrorActive: boolean = false;

  constructor(
    private http: HttpClient,
    private Data: DataService,
    private router: Router,
    private Auth: AuthService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() {
    console.log(this.bErrorActive);
  }

  onSubmit() {
    this.Data.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    if (typeof (data.message) !== 'undefined') {
      console.log(data.message);
      this.handleError(data.message);
    } else {
     // console.log(data[0]["id"]);
     // sessionStorage.setItem('user', JSON.stringify(data));
      sessionStorage.setItem('id', JSON.stringify(data[0]["id"]));
      this.Auth.changeAuthStatus(true);
      this.activeModal.close();
    }

  }

  handleError(error) {
    if (error === "notActive") {
      this.bErrorActive = true;
      console.log(this.bErrorActive);
      this.errorActive = 'Vous n\'avez pas encore activé votre compte.';
    } else {
      this.error = 'Le login et le mot de passe ne coincident pas.';
    }
  }

  // handleErrorNotActive(errorActive) {
  //   console.log(errorActive);
  //   console.log("entrée dans errorActive");
  //   this.errorActive = "Vous n'avez pas activé votre compte";
  // }

  redirectionVersFormulaire() {
      this.router.navigateByUrl('/formulaireActivation');
  }

  redirectLostPassword() {
    this.activeModal.close();
    this.router.navigateByUrl('/request-password-reset');
  }

  redirectSignup() {
    this.activeModal.close();
    this.router.navigateByUrl('/signup');
  }

}

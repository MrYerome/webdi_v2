import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/Dataservice";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-send-activation',
  templateUrl: './send-activation.component.html',
  styleUrls: ['./send-activation.component.css']
})
export class SendActivationComponent implements OnInit {

  public form = {
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

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.Data.sendMailAfterSignup(this.form).subscribe(
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

}

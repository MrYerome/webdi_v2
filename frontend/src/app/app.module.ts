
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {AccueilComponent} from "./Component/accueil/accueil.component";
import {PageNotFoundComponent} from "./Component/page-not-found/page-not-found.component";
import {DinersComponent} from "./Component/diners/diners.component";
import {TestComponent} from "./Component/test/test.component";
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {DataService} from "./Services/Dataservice";
import {SignupComponent} from "./Component/signup/signup.component";
import {ProfileComponent} from "./Component/profile/profile.component";
import {ConnexionComponent} from "./Component/connexion/connexion.component";
import{ ModifProfilComponent} from "./Component/modif-profil/modif-profil.component";
import {AuthService} from "./Services/auth.service";
import {TokenService} from "./Services/token.service";
import {FormProfilComponent} from "./Component/form-profil/form-profil.component";


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    DinersComponent,
    TestComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    ConnexionComponent,
    ModifProfilComponent,
    FormProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, AuthService, TokenService,

    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {LoginComponent} from "./Component/login/login.component";
import {SignupComponent} from "./Component/signup/signup.component";
import {TokenService} from "./Services/token.service";
import {AuthService} from "./Services/auth.service";
import {AfterLoginService} from "./Services/after-login.service";
import {BeforeLoginService} from "./Services/before-login.service";
import {ProfileComponent} from "./Component/profile/profile.component";


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    DinersComponent,
    TestComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, TokenService, AuthService,
    AfterLoginService, BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {ProfileModule} from "./Component/profile/profile.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccueilComponent} from "./Component/accueil/accueil.component";
import {PageNotFoundComponent} from "./Component/page-not-found/page-not-found.component";
import {TestComponent} from "./Component/test/test.component";
import {NavbarComponent} from "./Component/navbar/navbar.component";
import {DataService} from "./Services/Dataservice";
import {SignupComponent} from "./Component/signup/signup.component";
import {ConnexionComponent} from "./Component/connexion/connexion.component";
import {AuthService} from "./Services/auth.service";
import {TokenService} from "./Services/token.service";
import {RequestResetComponent} from "./Component/password/request-reset/request-reset.component";
import {ResponseResetComponent} from "./Component/password/response-reset/response-reset.component";
import {AfterLoginService} from "./Services/after-login.service";
import {BeforeLoginService} from "./Services/before-login.service";
import { ActivationComponent } from './Component/activation/activation.component';
import {DinersModule} from "./Component/Diners/diners.module";
import {NgbModule, NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    TestComponent,
    NavbarComponent,
    SignupComponent,
    ConnexionComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ActivationComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfileModule,
    DinersModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [DataService, AuthService, TokenService, AfterLoginService, BeforeLoginService,

    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

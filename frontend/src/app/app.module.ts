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
import {ListDinersComponent} from './Component/diner/list-diners/list-diners.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PageNotFoundComponent,
    TestComponent,
    NavbarComponent,
    SignupComponent,
    ConnexionComponent,
    ListDinersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProfileModule,
    HttpClientModule,
    SnotifyModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, AuthService, TokenService,

    {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

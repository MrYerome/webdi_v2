import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {TestComponent} from "../Component/test/test.component";
import {DinersComponent} from "../Component/diners/diners.component";
import {AccueilComponent} from "../Component/accueil/accueil.component";
import {LoginComponent} from "../Component/login/login.component";
import {SignupComponent} from "../Component/signup/signup.component";
import {BeforeLoginService} from "../Services/before-login.service";
import {ProfileComponent} from "../Component/profile/profile.component";


const ROUTES: Routes = [
  {path:'', component : AccueilComponent  },
  {path:'accueil', component : AccueilComponent  },
  {path:'diners', component : DinersComponent  },
  {path:'test', component : TestComponent  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {path:'signup', component : SignupComponent  },
  {path:'profile', component : ProfileComponent  },
]

@NgModule({
  imports: [
RouterModule.forRoot(ROUTES),

  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

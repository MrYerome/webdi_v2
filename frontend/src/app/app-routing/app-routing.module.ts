import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {TestComponent} from "../Component/test/test.component";
import {AccueilComponent} from "../Component/accueil/accueil.component";
import {SignupComponent} from "../Component/signup/signup.component";
import {ConnexionComponent} from "../Component/connexion/connexion.component";
import {RequestResetComponent} from "../Component/password/request-reset/request-reset.component";
import {ResponseResetComponent} from "../Component/password/response-reset/response-reset.component";
import { BeforeLoginService } from "../Services/before-login.service";
import { AfterLoginService} from "../Services/after-login.service";
import {ActivationComponent} from "../Component/activation/activation.component";
import {SendActivationComponent} from "../Component/send-activation/send-activation.component";
import {ForbiddenComponent} from "../Component/forbidden/forbidden.component";




const ROUTES: Routes = [
  {path: '', component : AccueilComponent  },
  {path: 'accueil', component : AccueilComponent  },
  {path: 'test', component : TestComponent  },
  {path: 'forbidden', component : ForbiddenComponent  },
  {path: 'connexion',
    component : ConnexionComponent,
    canActivate: [BeforeLoginService]},
  {path: 'signup', component : SignupComponent  },
  {path: 'formulaireActivation', component : SendActivationComponent  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'activation',
    component: ActivationComponent,
    //canActivate: [BeforeLoginService]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
          scrollPositionRestoration: 'enabled'
      }),
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

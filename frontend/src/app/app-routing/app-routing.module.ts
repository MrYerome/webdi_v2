import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {TestComponent} from "../Component/test/test.component";
import {DinersComponent} from "../Component/diners/diners.component";
import {AccueilComponent} from "../Component/accueil/accueil.component";
import {SignupComponent} from "../Component/signup/signup.component";
import {ProfileComponent} from "../Component/profile/profile.component";
import {ConnexionComponent} from "../Component/connexion/connexion.component";
import {ModifProfilComponent} from "../Component/modif-profil/modif-profil.component";


const ROUTES: Routes = [
  {path:'', component : AccueilComponent  },
  {path:'accueil', component : AccueilComponent  },
  {path:'diners', component : DinersComponent  },
  {path:'test', component : TestComponent  },
  {path:'connexion', component : ConnexionComponent  },
  {path:'modifProfile', component : ModifProfilComponent  },
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

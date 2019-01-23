import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from "../app.component";
import {TestComponent} from "../Component/test/test.component";
import {AccueilComponent} from "../Component/accueil/accueil.component";
import {SignupComponent} from "../Component/signup/signup.component";
import {ConnexionComponent} from "../Component/connexion/connexion.component";
import {ModifProfilComponent} from "../Component/profile/modif-profil/modif-profil.component";
import {ProfileViewComponent} from "../Component/profile/profile-view/profile-view.component";
import {ListDinersComponent} from "../Component/diner/list-diners/list-diners.component";
import {ListProfilesComponent} from "../Component/profile/list-profiles/list-profiles.component";


const ROUTES: Routes = [
  {path:'', component : AccueilComponent  },
  {path:'accueil', component : AccueilComponent  },
  {path:'test', component : TestComponent  },
  {path:'connexion', component : ConnexionComponent  },
  {path:'signup', component : SignupComponent  },
  {path:'profile', component : ProfileViewComponent  },
  {path:'profile/list', component : ListProfilesComponent  },
  {path : 'listDiners', component : ListDinersComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

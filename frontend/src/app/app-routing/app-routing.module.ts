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


const ROUTES: Routes = [
  {path:'', component : AccueilComponent  },
  {path:'accueil', component : AccueilComponent  },
  {path:'test', component : TestComponent  },
  {path:'connexion', component : ConnexionComponent  },
  // {path:'modifProfile', component : ModifProfilComponent  },
  {path:'signup', component : SignupComponent  },
  // {path:'profile-view', component : ProfileViewComponent  },
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

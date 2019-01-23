import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ProfileViewComponent} from "./profile-view/profile-view.component";
import {ListProfilesComponent} from "./list-profiles/list-profiles.component";
import {ModifProfilComponent} from "./modif-profil/modif-profil.component";

const profilesRoutes: Routes = [
  {path : 'profile/list', component : ListProfilesComponent},
  {path : 'profile/edit/:id', component : ModifProfilComponent},
  {path : 'profile/view/:id', component : ProfileViewComponent},
  // {path : 'profile/view/', component : ProfileViewComponent},
  {path : 'profile/view', component : ProfileViewComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilesRoutingModule { }

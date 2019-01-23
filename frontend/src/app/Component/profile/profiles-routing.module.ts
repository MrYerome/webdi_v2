import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ProfileViewComponent} from "./profile-view/profile-view.component";
import {ListProfilesComponent} from "./list-profiles/list-profiles.component";
import {ModifProfilComponent} from "./modif-profil/modif-profil.component";

const profilesRoutes: Routes = [
  {path : 'profile', component : ListProfilesComponent},
  {path : 'profile/profile-edit', component : ModifProfilComponent},
  {path : 'profile/:id', component : ProfileViewComponent}
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

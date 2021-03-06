import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ProfileViewComponent} from "./profile-view/profile-view.component";
import {ListProfilesComponent} from "./list-profiles/list-profiles.component";
import {ModifProfilComponent} from "./modif-profil/modif-profil.component";
import {AuthGuard} from "../../Services/AuthGuard";

const profilesRoutes: Routes = [
  // {path : 'profile/list', canActivate: [AuthGuard],  component : ListProfilesComponent},
  {path : 'profile/list',  component : ListProfilesComponent},
  {path : 'profile/edit/:id', canActivate: [AuthGuard],  component : ModifProfilComponent},
  {path : 'profile/view/:id', canActivate: [AuthGuard], component : ProfileViewComponent},
  {path : 'profile/view', canActivate: [AuthGuard], component : ProfileViewComponent},
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ProfileViewComponent} from "./profile-view/profile-view.component";
import {ListProfilesComponent} from "./list-profiles/list-profiles.component";

const profilesRoutes: Routes = [
  {path : 'profile', component : ListProfilesComponent},
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

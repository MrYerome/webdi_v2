import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {FormProfilComponent} from "./form-profil/form-profil.component";
import {ModifProfilComponent} from "./modif-profil/modif-profil.component";
import{ProfileViewComponent} from "./profile-view/profile-view.component";
import{ProfilesRoutingModule} from "./profiles-routing.module";
import { ListProfilesComponent } from './list-profiles/list-profiles.component';

@NgModule({
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule
  ],
  declarations: [
    ProfileViewComponent,
    ModifProfilComponent,
    FormProfilComponent,
    ListProfilesComponent
  ],
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListDinersComponent} from "./list-diners/list-diners.component";
import {CreateDinerComponent} from "./create-diner/create-diner.component";
import {ViewDinerComponent} from "./view-diner/view-diner.component";
import {ListoldDinersComponent} from "./listold-diners/listold-diners.component";
import {ParticipeDinerComponent} from "./participe-diner/participe-diner.component";
import {ParticipeoldDinersComponent} from "./participeold-diners/participeold-diners.component";
import {OwnerDinersComponent} from "./owner-diners/owner-diners.component";
import {EditDinerComponent} from "./edit-diner/edit-diner.component";
import {AuthGuard} from "../../Services/AuthGuard";


/**
 * Définit les routes.
 * On prévoit un canActivate avec AuthGuard pour empêcher les routes
 */
const dinersRoutes: Routes = [
    {path : 'diners/list', component : ListDinersComponent},
    {path : 'diners/create', component : CreateDinerComponent},
    {path : 'diners/view/:id', component: ViewDinerComponent},
    {path : 'diners/list/old', component: ListoldDinersComponent},
    {path : 'diners/participe', canActivate: [AuthGuard], component: ParticipeDinerComponent},
    {path : 'diners/participe/old', canActivate: [AuthGuard],  component: ParticipeoldDinersComponent},
    {path : 'diners/mydiners', canActivate: [AuthGuard],  component: OwnerDinersComponent},
    {path : 'diners/edit/:id', canActivate: [AuthGuard],  component: EditDinerComponent},
]

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
      RouterModule.forChild(dinersRoutes)
  ],
    exports: [
        RouterModule
    ]
})
export class DinersRoutingModule { }

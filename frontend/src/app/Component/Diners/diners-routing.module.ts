import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListDinersComponent} from "./list-diners/list-diners.component";
import {CreateDinerComponent} from "./create-diner/create-diner.component";
import {ViewDinerComponent} from "./view-diner/view-diner.component";
import {ListoldDinersComponent} from "./listold-diners/listold-diners.component";
import {ParticipeDinerComponent} from "./participe-diner/participe-diner.component";
import {ParticipeoldDinersComponent} from "./participeold-diners/participeold-diners.component";

const dinersRoutes: Routes = [
    {path : 'diners/list', component : ListDinersComponent},
    {path : 'diners/create', component : CreateDinerComponent},
    {path : 'diners/view/:id', component: ViewDinerComponent},
    {path : 'diners/list/old', component: ListoldDinersComponent},
    {path : 'diners/participe', component: ParticipeDinerComponent},
    {path : 'diners/participe/old', component: ParticipeoldDinersComponent},


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

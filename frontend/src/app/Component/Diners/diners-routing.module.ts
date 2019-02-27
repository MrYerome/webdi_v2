import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListDinersComponent} from "./list-diners/list-diners.component";
import {CreateDinerComponent} from "./create-diner/create-diner.component";
import {ViewDinerComponent} from "./view-diner/view-diner.component";

const dinersRoutes: Routes = [
    {path : 'diners/list', component : ListDinersComponent},
    {path : 'diners/create', component : CreateDinerComponent},
    {path : 'diners/view/:id', component: ViewDinerComponent},

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

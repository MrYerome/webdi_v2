import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListDinersComponent} from "./list-diners/list-diners.component";

const dinersRoutes: Routes = [

  {path : 'diners/listDiners', component : ListDinersComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dinersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DinersRoutingModule { }

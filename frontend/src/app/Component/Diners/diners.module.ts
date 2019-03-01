import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDinersComponent} from './list-diners/list-diners.component';
import {DinersRoutingModule} from "./diners-routing.module";
import {CreateDinerComponent} from './create-diner/create-diner.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ViewDinerComponent } from './view-diner/view-diner.component';
import {MaterialModule} from "../../material/material.module";
import { ListoldDinersComponent } from './listold-diners/listold-diners.component';
import { ParticipeDinerComponent } from './participe-diner/participe-diner.component';
import { ParticipeoldDinersComponent } from './participeold-diners/participeold-diners.component';


@NgModule({
  exports: [MaterialModule],
  declarations: [ListDinersComponent,
    CreateDinerComponent,
    ViewDinerComponent,
    ListoldDinersComponent,
    ParticipeDinerComponent,
    ParticipeoldDinersComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    DinersRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class DinersModule {
}

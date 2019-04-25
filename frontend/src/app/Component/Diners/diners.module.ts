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
import { OwnerDinersComponent } from './owner-diners/owner-diners.component';
import { EditDinerComponent } from './edit-diner/edit-diner.component';
import {MatInputModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  exports: [MaterialModule],
  declarations: [ListDinersComponent,
    CreateDinerComponent,
    ViewDinerComponent,
    ListoldDinersComponent,
    ParticipeDinerComponent,
    ParticipeoldDinersComponent,
    OwnerDinersComponent,
    EditDinerComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    DinersRoutingModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})
export class DinersModule {
}

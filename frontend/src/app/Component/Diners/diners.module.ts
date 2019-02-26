import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListDinersComponent} from './list-diners/list-diners.component';
import {DinersRoutingModule} from "./diners-routing.module";
import {CreateDinerComponent} from './create-diner/create-diner.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ViewDinerComponent} from './view-diner/view-diner.component';

@NgModule({
  declarations: [ListDinersComponent,
    CreateDinerComponent,
    ViewDinerComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    DinersRoutingModule,
    FormsModule
  ]
})
export class DinersModule {
}

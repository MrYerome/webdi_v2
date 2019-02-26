import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDinersComponent } from './list-diners/list-diners.component';
import {DinersRoutingModule} from "./diners-routing.module";
import { CreateDinerComponent } from './create-diner/create-diner.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ListDinersComponent, CreateDinerComponent],
  imports: [
    NgbModule,
    CommonModule,
    DinersRoutingModule,
    FormsModule
  ]
})
export class DinersModule { }

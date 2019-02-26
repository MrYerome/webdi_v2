import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDinersComponent } from './list-diners/list-diners.component';
import {DinersRoutingModule} from "./diners-routing.module";
import { CreateDinerComponent } from './create-diner/create-diner.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ListDinersComponent, CreateDinerComponent],
  imports: [
    CommonModule,
    DinersRoutingModule,
    FormsModule,
  ]
})
export class DinersModule { }

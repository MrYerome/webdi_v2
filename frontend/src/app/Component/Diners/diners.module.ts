import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDinersComponent } from './list-diners/list-diners.component';
import {DinersRoutingModule} from "./diners-routing.module";

@NgModule({
  declarations: [ListDinersComponent],
  imports: [
    CommonModule,
    DinersRoutingModule
  ]
})
export class DinersModule { }

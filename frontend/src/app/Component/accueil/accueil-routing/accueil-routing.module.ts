
import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";



const ROUTES: Routes = [
  // {path : '' , component : AccueilComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: []
})
export class AccueilRoutingModule { }




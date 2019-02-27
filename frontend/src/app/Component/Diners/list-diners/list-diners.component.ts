import {Component, NgModule, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DataService} from "../../../Services/Dataservice";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
// import {MatCheckboxModule, MatCheckbox} from '@angular/material';

@Component({
  selector: 'app-list-diners',
  templateUrl: './list-diners.component.html',
  styleUrls: ['./list-diners.component.css']
})
@NgModule({
  //   imports: [MatCheckboxModule, MatCheckbox],
  // exports: [MatCheckbox, MatCheckboxModule],
})
export class ListDinersComponent implements OnInit {
  diners: Diner[];
  filter : {
    group : "Inauguration"
  }

  constructor(private Data: DinerServiceService,
              private router: Router) {
  }

  ngOnInit() {
    // this.Data.getAllDiners().subscribe(
    //   diners => {
    //     this.diners = diners
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log(this.diners);
    //   }
    // );
    //
    // this.Data.getAllDiners().subscribe(
    //   diners => this.diners = diners
    // );

    this.Data.getAllDiners().pipe(
      map(
        (diners: Diner[]) => diners
        //   .filter(
        //   (diner: Diner) => diner.title === 'Développeur DevOps'
        // )
        //   .filter((diner: Diner) => {
        //     if (4==4) {
        //       diner.title === 'Développeur DevOps'
        //       //return diner.title.includes(this.filter.group);
        //     }
        //     else{
        //       diner.title === 'Inauguration'
        //     }
        //   })
          .filter((diner: Diner) => {
            if (true) {
              return diner.title === 'Développeur DevOps'
              //return diner.title.includes(this.filter.group);
            }
            else{
              return diner.title === 'Inauguration'
            }
          })
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners;
      }
    );


  }

  selectDiner(d) {
    console.log(d);
    this.router.navigate(['/diners/view', d]);
  }
}

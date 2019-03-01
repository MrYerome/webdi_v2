import {Component, NgModule, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DataService} from "../../../Services/Dataservice";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Themes} from "../../../models/themes";
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
  ObsDiners = new Observable();
  diners: Diner[];
  themes : Themes[];
  checked : boolean = false;
  filter : {
    group : "Inauguration"
  }

  constructor(private Data: DinerServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.Data.getAllThemes().subscribe(
      (themes: Themes[]) => {
        this.themes = themes; console.log(themes);
      }
    );
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
    this.ObsDiners = this.Data.getAllDiners();
    //this.Data.getAllDiners().pipe(
      this.ObsDiners.pipe(
      map(
        (diners: Diner[]) => diners
        //   .filter(
        //   (diner: Diner) => diner.title === 'Développeur DevOps'
        // )

          // .filter((diner: Diner) => {
          //   console.log(diners);
          //   if (true) {
          //     return diner.title === 'Développeur DevOps'
          //     //return diner.title.includes(this.filter.group);
          //   }
          //   else{
          //     return diner.title === 'Inauguration'
          //   }
          // })
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners; console.log(diners);
        this.addCheckboxes();
      }
    );
  }

  private addCheckboxes() {
    // this.diners.map((o, i) => {
    //   const control = new FormControl(i === 0); // if first item set to true, else false
    //   (this.form.controls.orders as FormArray).push(control);
    // });
  }

  selectDiner(d) {
    console.log(d);
    this.router.navigate(['/diners/view', d]);
  }

  changeMat() {
    if (this.checked.valueOf() ==false){
      this.checked =true;
      this.ObsDiners.pipe(
        map(
          (diners: Diner[]) => diners
            .filter(
              (diner: Diner) => diner.title === 'Développeur DevOps'
            )
        )
      ).subscribe(
        (diners: Diner[]) => {
          this.diners = diners; console.log(diners);
          this.addCheckboxes();
        }
      );
    }
    else {
      this.checked =false;
      this.ObsDiners.pipe(
        map(
          (diners: Diner[]) => diners
            // .filter(
            //   (diner: Diner) => diner.title === 'Développeur DevOps'
            // )
        )
      ).subscribe(
        (diners: Diner[]) => {
          this.diners = diners; console.log(diners);
          this.addCheckboxes();
        }
      );
    }
    console.log("OK");


  }

  changeTheme(themeId: number) {
    this.ObsDiners.pipe(
      map(
        (diners: Diner[]) => diners
          .filter(
            (diner: Diner) => diner.theme.id == themeId
          )
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners; console.log(diners);
        this.addCheckboxes();
      }
    );
  }
}

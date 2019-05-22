import {Component, NgModule, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DataService} from "../../../Services/Dataservice";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Themes} from "../../../models/themes";
import {forEach} from "@angular-devkit/schematics";
import {MatRadioButton} from "@angular/material";


// import {combineLatest} from 'rxjs/observable/combineLatest';

// import {combineLatest} from 'rxjs';

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
  ObsDinersTemp = new Observable();
  diners: Diner[];
  themes: Themes[];
  arrayThemes: string[] = [];
  checked: boolean = false;
  filter: {
    group: "Inauguration"
  }
  public numberTheme: number;

  constructor(private Data: DinerServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.Data.getAllThemes().subscribe(
      (themes: Themes[]) => {
        this.themes = themes;
        //console.log(themes);
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
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners;
        //console.log(diners);
      }
    );
    this.ObsDinersTemp = this.ObsDiners;
  }

  selectDiner(d) {
    console.log(d);
    this.router.navigate(['/diners/view', d]);
  }

  allTheme($event: MatRadioButton) {
    console.log("affichage de tous les diners");
    this.ObsDiners = this.Data.getAllDiners();
    this.ObsDiners.pipe(
      map(
        (diners: Diner[]) => diners
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners;
      }
    );
  }

  // changeTheme($event: MatRadioButton) {
  //   console.log($event.value);
  //   this.numberTheme = $event.value;
  //
  //     console.log("refactoring de l'obs");
  //     //début foreach
  //
  //     this.ObsDiners.pipe(
  //       map(
  //         (diners: Diner[]) => diners
  //           .filter(
  //             (diner: Diner) => {
  //
  //               return diner.theme.id == this.numberTheme;
  //             }
  //           )
  //       )
  //
  //     ).subscribe(
  //       (diners: Diner[]) => {
  //         this.diners = diners;
  //         console.log(diners);
  //         console.log(this.diners);
  //       }
  //     )
  //
  //
  // }
  // const filtres = ['environnement', 'culture'];
  // console.log(diners.filter v=> filtres.includes(v.theme)));

  changeThemes(filterThemeArray) {
    console.log("clic sur le thème : ");
    console.log(filterThemeArray);
    console.log("contenu du tableau de thèmes avant push / remove : ");
    console.log(this.arrayThemes);
    let index = this.arrayThemes.indexOf(filterThemeArray);
    if (this.arrayThemes.includes(filterThemeArray)) {
      console.log("entrée dans le remove");
      if (index > -1) {
        this.arrayThemes.splice(index, 1);
      }
    } else {
      this.arrayThemes.push(filterThemeArray);
    }

    console.log("contenu du tableau de thèmes après push / remove : ");
    console.log(this.arrayThemes);

    if (this.arrayThemes.length > 0) {
      this.ObsDiners.pipe(
        map(
          (diners: Diner[]) => diners
            .filter(
              (diner: Diner) => {
                return this.arrayThemes.includes(diner.theme.label);
              }
            )
        )
      ).subscribe(
        (diners: Diner[]) => {
          this.diners = diners;
          // console.log(diners);
          // console.log(this.diners);
        }
      );
    }
    else {
      this.ObsDiners.pipe(
        map(
          (diners: Diner[]) => diners
        )
      ).subscribe(
        (diners: Diner[]) => {
          this.diners = diners;
          //console.log(diners);
        }
      );
    }
  }
}


// this.ObsDiners.pipe(
//   map(
//     (diners: Diner[]) => diners
//       .filter(
//         (diner: Diner) => diner.theme.id == themeId
//       )
//   )
// ).subscribe(
//   (diners: Diner[]) => {
//     this.diners = diners;
//     console.log(diners);
//   }
// );


/**
 //  * Filtre
 //  */
// filterTickets(): void {
//   this.ObsDiners.pipe(map(diners => {
//     if (diners['title'] === "Inauguration") {
//       if (diners['description'] !== null) {
//         this.diners = diners['title'].map(diners => diners.name);
//       }
//     }
//   }));
//   this.tickets$ = this.ticketsLoaded$.map(
//     tickets => tickets
//     //  Filtre sur le status
//       .filter(
//         ticket => STATUS_MANAGER[this.filter.status].indexOf(ticket.status) >= 0
//       )
//       // Filtre sur le titre
//       .filter(
//         ticket => {
//           if (isNaN(parseInt(this.filter.search, 10))) {
//             return ticket.title.includes(this.filter.search) ;
//           } else {
//             return ticket.id.includes(this.filter.search) ;
//           }
//         }
//       )
//       // Filtre Produit
//       .filter(ticket => {
//         let result;
//         if (this.pliEntities.includes(this.filter.product)) {
//           this.userEntities.map(entity => {
//             if (this.filter.product === entity['name'] && entity['children'] !== null) {
//               entity['children'].map(child => {
//                 if (ticket.produit !== undefined) {
//                   if (ticket.produit === child.name || ticket.produit === entity['name']) {
//                     result = ticket;
//                   }
//                 }
//               });
//             } else if (this.filter.product === entity['name'] && entity['children'] === null) {
//               result = ticket.produit.includes(this.filter.product);
//             }
//           });
//           return result;
//         }
//         return true;
//       })
//       // Filtre sur la société
//       .filter(ticket => {
//         if (this.pliGroups.includes(this.filter.group)) {
//           return ticket.group.includes(this.filter.group);
//         }
//         return true;
//       })
//       // Filtre sur mes tickets
//       .filter(ticket => {
//         if (this.filter.myTickets === true) {
//           return ticket.username === this.username;
//         }
//         return true;
//       })
//       // Filtre sur le produit
//       .filter(ticket => {
//         if (this.filter.product == '1') {
//           return ticket;
//         }
//         if (this.filter.child !== 1) {
//           return ticket.produit.includes(this.filter.child);
//         }
//         return true;
//       }));
//   this.store.dispatch(new TicketListModule.SuccessFilterTickets(this.filter));
// }



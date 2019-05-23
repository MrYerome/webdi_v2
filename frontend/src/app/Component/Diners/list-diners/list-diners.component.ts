import {Component, NgModule, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Themes} from "../../../models/themes";
import {MatRadioButton} from "@angular/material";


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
  numberTheme: number;

  constructor(private Data: DinerServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.Data.getAllThemes().subscribe(
      (themes: Themes[]) => {
        this.themes = themes;
      }
    );
    this.ObsDiners = this.Data.getAllDiners();
    this.selectAllDiners();
  }

  selectAllDiners() {
    this.ObsDiners.pipe(
      map(
        (diners: Diner[]) => diners
      )
    ).subscribe(
      (diners: Diner[]) => {
        this.diners = diners;
      }
    );
    this.ObsDinersTemp = this.ObsDiners;
  }

  selectDiner(d) {
    console.log(d);
    this.router.navigate(['/diners/view', d]);
  }


  /**
   * Ajuste la liste des diners en passant un filtre sur les thèmes
   * @param filterThemeArray
   */
  changeThemes(filterThemeArray) {
    let index = this.arrayThemes.indexOf(filterThemeArray);
    if (this.arrayThemes.includes(filterThemeArray)) {
      if (index > -1) {
        this.arrayThemes.splice(index, 1);
      }
    } else {
      this.arrayThemes.push(filterThemeArray);
    }
    console.log(this.arrayThemes);
    //Si la liste de thèmes est vide, on affiche tous les diners
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
        }
      );
    } else {
      this.selectAllDiners();
    }
  }
}


/**
 * Anciennes méthodes avec les radio buttons
 * OBSOLETE
 * @param $event
 */
// allTheme($event: MatRadioButton) {
//   console.log("affichage de tous les diners");
//   this.ObsDiners = this.Data.getAllDiners();
//   this.ObsDiners.pipe(
//     map(
//       (diners: Diner[]) => diners
//     )
//   ).subscribe(
//     (diners: Diner[]) => {
//       this.diners = diners;
//     }
//   );
// }
/**
 * Anciennes méthodes avec les radio buttons
 * OBSOLETE
 * @param $event
 */
// changeTheme($event: MatRadioButton) {
//   console.log($event.value);
//   this.numberTheme = $event.value;
//     this.ObsDiners.pipe(
//       map(
//         (diners: Diner[]) => diners
//           .filter(
//             (diner: Diner) => {
//               return diner.theme.id == this.numberTheme;
//             }
//           )
//       )
//     ).subscribe(
//       (diners: Diner[]) => {
//         this.diners = diners;
//         console.log(diners);
//         console.log(this.diners);
//       }
//     )
// }

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



import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {

  constructor(private router: Router,
              private Data: DataService) {
  }

  ngOnInit() {
    // this.Data.getAllProfiles().subscribe(
    //   users => this.users = users,
    //   error => {
    //     console.log('erreur ');
    //   },
    //   () => {
    //     console.log(this.users);
    //   }
    // )
    //
    // this.Data.getProfile(this.id).subscribe(
    //   value =>{
    //     console.log(value); this.user = value[0]},
    //   error => {
    //     console.log('erreur ');
    //   },
    //   () => {
    //     console.log(this.user.login);
    //     console.log(this.user.profile.name);
    //     console.log(this.user.usertypes.label);
    //   }
    // )
  }

  // handleError(error) {
  //   this.error = "Le login et le mot de passe ne coincident pas.";
  // }

  // getAllUsers(): Observable < User[] > {
  //   return this.http.get <User[]>(this.disquesUrl).pipe(
  //     catchError(this.handleError('getAllDisques', []))
  //   );
  // }
  // getUser(id: number): Observable < User > {
  //   return this.http.get < User > (url).pipe(tap(_ => console.log(`fetched hero id=${id}`)), catchError(this.handleError < Disque > (`getDisque id=${id}`)));
  // }

  onSubmit() {
    console.log('form envoye');
    // this.disqueService
    //   .updateDisque(this.disque)
    //   .subscribe(()=>this.goBack());
  }

  goBack(): void {
    console.log("router");
    // this.router.navigate(['/disque', this.disque.id]);
  }

}

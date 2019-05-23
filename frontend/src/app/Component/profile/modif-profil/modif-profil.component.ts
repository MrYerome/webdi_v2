import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {
  public user = {
    id: null,
    name: null,
    firstName: null,
    email: null,
    cities:{
      nom_reel: null
    },
    specAlim: null
  };

  constructor(private route : ActivatedRoute,
              private router: Router,
              private Data: DataService) {
  }



  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('id');
    if (id.toString()==(sessionStorage.getItem("id"))){
      console.log("Ok pour accéder à la page ");
    }
    else {
      // l'utilisateur essaie de modifier une page qui n'est pas la sienne
      console.log("KO");
      // this.router.navigate(['/profile/list']);
      this.router.navigate(['../accueil']);
    }

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
    this.Data.updateUser(this.user).subscribe(()=>this.goBack());;
    // this.disqueService
    //   .updateDisque(this.disque)
    //   .subscribe(()=>this.goBack());
  }

  goBack(): void {
    console.log("router");
     this.router.navigate(['/profile/list']);
  }

}

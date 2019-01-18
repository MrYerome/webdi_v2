import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {DataService} from "../../Services/Dataservice";

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {
  public users: User[];
  user: User;
  public error = null;
  public id = 4;

  constructor(private router: Router,
              private Data: DataService) {
  }

  ngOnInit() {
    // this.Data.profile(this.login).subscribe(
    //   data => {
    //     console.log(data);
    //     this.user = data
    //   },
    //   error => this.handleError(error),
    //   () => {
    //     console.log('Fini ');
    //   }
    // );
    // console.log(this.user);

    this.Data.getAllProfiles().subscribe(
      users => this.users = users,
      error => {
        console.log('erreur ');
      },
      () => {
        console.log(this.users);
      }
    )

    this.Data.getProfile(this.id).subscribe(
      users => this.users = users,
      error => {
        console.log('erreur ');
      },
      () => {
        console.log(this.users);
      }
    )
  }

  handleError(error) {
    this.error = "Le login et le mot de passe ne coincident pas.";
  }

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

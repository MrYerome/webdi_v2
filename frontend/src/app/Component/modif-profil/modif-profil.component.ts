import { Component, OnInit, Input } from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";
import {DataService} from "../../Services/Dataservice";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {log} from "util";

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {

 user : any=null;
  public error = null;
  public login ="jvinet";
  constructor(  private router :Router,
                private Data: DataService) {
    // console.log(JSON.parse(sessionStorage.getItem('user')));
    // this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {
  console.log(this.login);

    this.Data.profile(this.login).subscribe(
      data => { console.log(data); this.user =  data},
      error => this.handleError(error),
      () => {console.log('Fini ');}
    );
    console.log(this.user);


    // this.Data.profile(this.login).subscribe(
    //   (data) => { console.log(data);},
    //   (error) => {console.log(error);},
    //   () => {
    //   console.log('Fini !');
    // });





    // this.getUser(id).subscribe(data => this.user=data);
    // this.getAllUsers();
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

  onSubmit(){
    console.log('form envoye');
    // this.disqueService
    //   .updateDisque(this.disque)
    //   .subscribe(()=>this.goBack());
  }

  goBack():void{
    console.log("router");
   // this.router.navigate(['/disque', this.disque.id]);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../Services/Dataservice";
import {typeAlias} from "@babel/types";

@Component({
  selector: 'app-form-profil',
  templateUrl: './form-profil.component.html',
  styleUrls: ['./form-profil.component.css']
})
export class FormProfilComponent implements OnInit {
  @Input() user: User;
  public users: User[];

  public error = null;


  constructor(private route : ActivatedRoute,
              private router: Router,
              private Data: DataService) {}

  ngOnInit() {
    let id =this.route.snapshot.paramMap.get('id');
    if (id==sessionStorage.getItem("id")){
      console.log("Ok");
      this.Data.getUser(id).subscribe(
        value =>{
          console.log(value); this.user = value},
        error => {
          console.log('erreur ');
        }
      )
    }
    else {
      this.router.navigateByUrl('/accueil');
    }
  }

  onSubmit(){
    console.log('form envoye');
    // console.log(this.user);
    console.log(this.user);
    this.Data.update(this.user)
      .subscribe(()=>this.goBack(this.user.id));
  }
  goBack(id):void{
    this.router.navigate(['/profile/view'], id);
  }
}

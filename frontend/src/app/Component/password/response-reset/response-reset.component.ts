import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  SnotifyService } from 'ng-snotify';
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public error=[];
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  constructor(
    private route:ActivatedRoute,
    private Data: DataService,
    private router:Router,
    private Notify:SnotifyService
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit(){
   this.Data.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleResponse(data){

    let _router = this.router;
    this.Notify.confirm('C\'est fait!, Connectez-vous avec votre nouveau mot de passe !', {
      buttons:[
        {text: 'OK',
        action: toster =>{
           _router.navigateByUrl('/connexion'),
           this.Notify.remove(toster.id)
          }
      },
      ]
    })
    
  }

  handleError(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}

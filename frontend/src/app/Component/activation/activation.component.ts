import {Component, OnInit} from '@angular/core';
import {DataService} from "../../Services/Dataservice";
import {ActivatedRoute, Router} from "@angular/router";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  public token = null;
  public error=[];

  constructor(
    private route: ActivatedRoute,
    private Data: DataService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.token = params['token']
    });
  }
//Au chargement de la page, j'appelle le back pour modifier le champ active
  ngOnInit() {
    this.Data.activation(this.token).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
//En cas de succès, je propose la redirection sur la page de connexion
    let _router = this.router;
    this.Notify.confirm('Votre compte est désormais activé. Vous pouvez vous connecter.', {
      buttons: [
        {
          text: 'Page de connexion',
          action: toster => {
            _router.navigateByUrl('/'),
              this.Notify.remove(toster.id)
          }
        },
      ]
    })

  }

  handleError(error) {
    this.error = error.error.errors;
  }
}

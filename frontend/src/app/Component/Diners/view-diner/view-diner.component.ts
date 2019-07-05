import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {DinerServiceService} from '../../../Services/diner-service.service';
import {Diner} from '../../../models/diner';
import {Places} from '../../../models/places';
import {City} from '../../../models/city';
import {Usersdiners} from '../../../models/usersdiners';
import {AuthService} from '../../../Services/auth.service';

@Component({
  selector: 'app-view-diner',
  templateUrl: './view-diner.component.html',
  styleUrls: ['./view-diner.component.css']
})
export class ViewDinerComponent implements OnInit {
    diner: Diner;
    city: City;
    public isSubscribe: boolean = false;
    public userid: string;
    public nbPlaces: number = 1;
    public id: string;
    public diners: Diner[];
    public mobile: boolean = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data: DinerServiceService,
              private Auth: AuthService) {
  }

  ngOnInit() {
    this.getDiner();
    if (this.Auth.isAuthenticated()) {
        this.userid = sessionStorage.getItem('id').toString();
        console.log(this.userid);
    }
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
      this.setIsMobile(window.innerWidth);
  }

    onResize(event) {
        this.setIsMobile(event.target.innerWidth);
    }
    setIsMobile(width) {
        if (width < 757) { // 768px portrait
            this.mobile = true;
        }else{
            this.mobile = false;
        }
    }

  getDiner() {
    if (this.route.snapshot.paramMap.get('id') != null) {
        this.id = this.route.snapshot.paramMap.get('id');

        this.Data.getDiner(this.id).subscribe(
            value => {
                // console.log(value);
                this.diner = value;
                console.log(this.diner);
                this.Data.getCity(this.diner.place.insee_Cities).subscribe(
                    value1 => {
                        this.city = value1[0];
                    });
                if (this.Auth.isAuthenticated()) {
                    this.verifIsSubscribe(this.diner);
                }
                this.Data.get3FirstDinerSameCat(this.id, this.diner.id_Themes).subscribe(
                    diners => {
                        this.diners = diners;
                        console.log(this.diners);
                    }
                );
            },
            error => {
                // console.log(error);
            });
    } else {
      this.router.navigate(['']);
    }
  }

  // If the user is connected and if his id is in userdiners set isSubscribe true
  verifIsSubscribe(diner) {
    console.log(diner);
    for (const ud of this.diner.usersdiners) {
      if ( ud.id_Users.toString() === this.userid) {
        this.isSubscribe = true;
      }
    }
  }

  editDiner(id) {
    this.router.navigate([`/diners/edit`, id]);
  }

  deleteDiner() {
    const data = {
      user_id: this.userid,
      diner_id: this.id,
    };
    console.log(data);
    this.Data.deleteDiners(data).subscribe(
      value => {
        // console.log(value);
      },
      error1 => {
        // console.log(error1);
      },
    );

  }

  subscribeDiner(idDiner) {
      if (this.Auth.isAuthenticated()) {
        const data = {
            id_Users: this.userid,
            id_Diners: idDiner,
            nbPlaces: this.nbPlaces
        };
        this.Data.subscribeDiner(data).subscribe(
        value => {
            // console.log(value);
            this.handleSuccess(idDiner);
            },
            error1 => {
            // console.log(error1);
            },
        );
      } else {
          this.router.navigate(['connexion']);
      }
  }

  unsubscribeDiner(idDiner) {
    const data = {
      id_Users: this.userid,
      id_Diners: idDiner,
    };
    console.log(data);
    this.Data.unsubscribeDiner(data).subscribe(
      value => {
        // console.log(value);
        this.handleSuccessUnsuscribe(idDiner);
      },
      error1 => {
        // console.log(error1);
      },
    );
  }

  handleSuccess(data) {
    this.isSubscribe = true;
    // this.router.navigate(['/diners/view'], data);
  }

  handleSuccessUnsuscribe(data) {
    this.isSubscribe = false;
  }

  ajouterParticipant() {
    if (this.nbPlaces < 6) {
      this.nbPlaces = this.nbPlaces + 1;
    }
  }

  enleverParticipant() {
    if (this.nbPlaces > 1) {
      this.nbPlaces = this.nbPlaces - 1;
    }
  }

    /**
     * Au clic sur un diner, ouverture d'une nouvelle page avec les specs du diner
     * @param d
     */
    selectDiner(d) {
        console.log(d);
        this.router.navigate(['/diners/view', d]).then(() => {
            this.ngOnInit();
        });
    }
    scrolltop() {
        window.scroll(0, 0);
    }
}

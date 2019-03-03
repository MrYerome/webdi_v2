import {Component, Input, OnInit} from '@angular/core';
import {DinerServiceService} from "../../../Services/diner-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Diner} from "../../../models/diner";
import {User} from "../../../models/user";
import {Places} from "../../../models/places";
import {Themes} from "../../../models/themes";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-edit-diner',
    templateUrl: './edit-diner.component.html',
    styleUrls: ['./edit-diner.component.css']
})
export class EditDinerComponent implements OnInit {
    private diner_id: string;
    @Input() diner: Diner;
    public places: Places[];
    public themes: Themes[];
    public date = {
        year: 2019,
        month: 1,
        day: 1
    };
    public time = {
        hour: 1,
        minute: 1,
    };

    constructor(private Data: DinerServiceService,
                private route: ActivatedRoute,
                private router: Router) {
        this.diner_id = this.route.snapshot.paramMap.get('id');

    }

    ngOnInit() {
        this.Data.getDiner(this.diner_id).subscribe(
            value => {

                if (value.id_Organisator.toString() === sessionStorage.getItem('id').toString()) {
                    this.diner = value;
                    this.setDefaultDate(this.diner.date)



                } else {

                    this.router.navigate(['/accueil']);
                }
            },
            error1 => {
                console.log(error1);
            },
            () => {
                console.log(this.diner);
            }
        );
        //on récupère les lieux
        this.Data.getAllPlaces().subscribe(
            places => {
                this.places = places;
            },
            error => {
                console.log(error);
            },
            () => {
                console.log(this.places);
            }
        );

        //on récupère les thèmes
        this.Data.getAllThemes().subscribe(
            themes => {
                this.themes = themes;
            },
            error => {
                console.log(error);
            },
            () => {
                console.log(this.themes);
            }
        );
    }

    public setDefaultDate(d) {
        const dtmp = new Date(d);
        this.date.year = dtmp.getFullYear();
        this.date.month = dtmp.getMonth();
        this.date.day = dtmp.getDay();
        this.time.hour = dtmp.getHours();
        this.time.minute = dtmp.getMinutes();
    }

    onSubmit() {

        // formattage de la date
        // this.diner.date = (Date) (this.date.year + '-' + this.date.month + '-' +
        //     this.date.day + ' ' + this.time.hour + ':' + this.time.minute + ':00');
      this.diner.date = null;
        //creation du diner
        console.log(this.diner);
        this.Data.updateDiner(this.diner).subscribe(
            data => {
                this.handleResponse(data);
            },
            error => this.handleError(error)
        );

    }

    handleResponse(data) {
        console.log("success");
        this.router.navigate(['/diners/view/', data.id]);
    }

    handleError(error) {
        console.log("erreur");
        console.log(error);

    }

}

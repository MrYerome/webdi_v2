import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Diner} from "../../../models/diner";
import {Places} from "../../../models/places";
import {City} from "../../../models/city";

@Component({
    selector: 'app-view-diner',
    templateUrl: './view-diner.component.html',
    styleUrls: ['./view-diner.component.css']
})
export class ViewDinerComponent implements OnInit {
    diner: Diner;
    city: City;
    public userid: string;
    public id: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private Data: DinerServiceService) {
    }

    ngOnInit() {
        this.getDiner();
        this.userid = sessionStorage.getItem('id').toString();
    }

    getDiner() {
        if (this.route.snapshot.paramMap.get('id') != null) {
            this.id = this.route.snapshot.paramMap.get('id');
        }

        this.Data.getDiner(this.id).subscribe(
            value => {
                console.log(value);
                this.diner = value;
                this.Data.getCity(this.diner.place.insee_Cities).subscribe(
                    value1 => {
                        console.log(value1);
                        this.city = value1[0];
                    });
            },
            error => {
                console.log(error);
            });

    }

    editDiner(id) {
        this.router.navigate([`/diners/edit/${id}`]);
    }

}

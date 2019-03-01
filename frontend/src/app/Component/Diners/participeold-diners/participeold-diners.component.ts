import { Component, OnInit } from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-participeold-diners',
  templateUrl: './participeold-diners.component.html',
  styleUrls: ['./participeold-diners.component.css']
})
export class ParticipeoldDinersComponent implements OnInit {
    diners: Diner[];
    private data = {
        user_id: null,
    };
    constructor(private Data: DinerServiceService,
                private router: Router) {
        this.data.user_id = sessionStorage.getItem('id').toString();
    }

    ngOnInit() {
        this.Data.getMyOldDiners(this.data).subscribe(
            value => {this.diners = value; },
            error1 => {console.log(error1); },
            () => {console.log(this.diners); }
        );
    }

    public selectDiner(id) {
        this.router.navigate([`/diners/view/${id}`]);
    }
}

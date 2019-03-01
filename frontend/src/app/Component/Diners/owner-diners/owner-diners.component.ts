import { Component, OnInit } from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-owner-diners',
  templateUrl: './owner-diners.component.html',
  styleUrls: ['./owner-diners.component.css']
})
export class OwnerDinersComponent implements OnInit {
    diners: Diner[];
    private data = {
        user_id: null,
    };
    constructor(private Data: DinerServiceService,
                private router: Router) {
        this.data.user_id = sessionStorage.getItem('id').toString();
    }

    ngOnInit() {
        this.Data.getMyOwnDiners(this.data).subscribe(
            value => {this.diners = value; },
            error1 => {console.log(error1); },
            () => {console.log(this.diners); }
        );
    }

    public selectDiner(id) {
        this.router.navigate([`/diners/view/${id}`]);
    }
}

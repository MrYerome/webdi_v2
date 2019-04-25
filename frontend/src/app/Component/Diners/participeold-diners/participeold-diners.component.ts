import { Component, OnInit } from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router} from "@angular/router";
import {Usersdiners} from "../../../models/usersdiners";

@Component({
  selector: 'app-participeold-diners',
  templateUrl: './participeold-diners.component.html',
  styleUrls: ['./participeold-diners.component.css']
})
export class ParticipeoldDinersComponent implements OnInit {
    usersdiners: Usersdiners[];
    private user_id: string;
    constructor(private Data: DinerServiceService,
                private router: Router) {
        this.user_id = sessionStorage.getItem('id').toString();
    }

    ngOnInit() {
        this.Data.getMyOldDiners(this.user_id).subscribe(
            value => {this.usersdiners = value; },
            error1 => {console.log(error1); },
            () => {console.log(this.usersdiners); }
        );
    }

    public selectDiner(id) {
        this.router.navigate([`/diners/view/${id}`]);
    }
}

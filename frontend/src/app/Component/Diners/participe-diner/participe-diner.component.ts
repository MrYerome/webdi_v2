import {Component, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router, RouterModule} from "@angular/router";

@Component({
    selector: 'app-participe-diner',
    templateUrl: './participe-diner.component.html',
    styleUrls: ['./participe-diner.component.css']
})
export class ParticipeDinerComponent implements OnInit {
    diners: Diner[];
    private data = {
        user_id: null,
    };
    constructor(private Data: DinerServiceService,
                private router: Router) {
        this.data.user_id = sessionStorage.getItem('id').toString();
    }

    ngOnInit() {
        this.Data.getMyDiners(this.data).subscribe(
            value => {this.diners = value; },
            error1 => {console.log(error1); },
            () => {console.log(this.diners); }
        );
    }

    public selectDiner(id) {
        this.router.navigate([`/diners/view/${id}`]);
    }

}
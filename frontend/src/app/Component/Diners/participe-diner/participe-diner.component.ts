import {Component, OnInit} from '@angular/core';
import {Diner} from "../../../models/diner";
import {DinerServiceService} from "../../../Services/diner-service.service";
import {Router, RouterModule} from "@angular/router";
import {Usersdiners} from "../../../models/usersdiners";

@Component({
    selector: 'app-participe-diner',
    templateUrl: './participe-diner.component.html',
    styleUrls: ['./participe-diner.component.css']
})
export class ParticipeDinerComponent implements OnInit {
    usersdiners: Usersdiners[];
    private user_id: null;

    constructor(private Data: DinerServiceService,
                private router: Router) {
        this.user_id = sessionStorage.getItem('id').toString();
    }

    ngOnInit() {
        this.Data.getMyDiners(this.user_id).subscribe(
            value => {this.usersdiners = value; },
            error1 => {console.log(error1); },
            () => {console.log(this.usersdiners); }
        );
    }

    public selectDiner(id) {
        this.router.navigate([`/diners/view/${id}`]);
    }

}

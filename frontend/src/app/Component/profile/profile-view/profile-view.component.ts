import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  users: User[];
  user: User;
  id: string;
  id1:string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data: DataService) {
  }

  ngOnInit() {
    this.recupProfile();
  }

  recupProfile() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    else {
      this.id = JSON.parse(sessionStorage.getItem('id').toString());
      this.id1=this.id;
    }

    this.Data.getUser(this.id).subscribe(
      data => {
      console.log(data);
      this.user = data
    });
  }

  selectProfile(d) {
    this.router.navigate(['/profile/edit', d]);
  }

}

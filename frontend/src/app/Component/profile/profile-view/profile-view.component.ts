import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../Services/Dataservice";
import {AuthService} from "../../../Services/auth.service";


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  users: User[];
  user: User;
  id: string;
  isMe: Boolean;
  myid: string;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private Data: DataService,
              private Auth: AuthService) {
  }

  ngOnInit() {
    this.recupProfile();
  }

  recupProfile() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.Auth.isAuthenticated()) {
        this.myid = JSON.parse(sessionStorage.getItem('id').toString());
      }
    } else {
      this.myid = JSON.parse(sessionStorage.getItem('id').toString());
      this.id = this.myid;
    }
    this.isMe = (this.id == this.myid);
    this.Data.getUser(this.id).subscribe(
      data => {
        console.log(data);
        this.user = data
      });
  }


  selectProfile(d) {
    this.router.navigate(['/profile/edit', d]);
  }

  modifPassword(d) {
    this.router.navigateByUrl('request-password-reset');

  }

}

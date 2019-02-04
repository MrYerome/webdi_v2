import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import {DataService} from "../../../Services/Dataservice";

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };


  constructor(
    private Data: DataService,
    private notify: SnotifyService,
    private Notfiy:SnotifyService
  ) { }

  ngOnInit() {
  }


  onSubmit() {
    // this.Notfiy.info('Wait...' ,{timeout:1000});
    this.Data.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    console.log(res);
    this.Notfiy.success(res.data,{timeout:5000});
    this.form.email = null;
  }

}

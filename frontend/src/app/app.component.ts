import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Diners intéressants';
  user='';

  ngOnInit() {
    sessionStorage.clear();
    localStorage.clear();
  }
}

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public mobile: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.setIsMobile(window.innerWidth);
  }

  onResize(event) {
    this.setIsMobile(event.target.innerWidth);
  }

  setIsMobile(width) {
    if (width < 757) { // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}

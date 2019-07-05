import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public mobile: boolean;
  constructor() { }

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

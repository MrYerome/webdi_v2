import {Component, Input, OnInit} from '@angular/core';
import {Diner} from '../../../models/diner';

@Component({
  selector: 'app-create-diner',
  templateUrl: './create-diner.component.html',
  styleUrls: ['./create-diner.component.css']
})
export class CreateDinerComponent implements OnInit {
  public diner = {};
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.diner);
  }
}

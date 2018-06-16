import { Component, OnInit, Input } from '@angular/core';
import { HouseProperties } from './../house-properties';
@Component({
  selector: 'app-house-display',
  templateUrl: './house-display.component.html',
  styleUrls: ['./house-display.component.css']
})
export class HouseDisplayComponent implements OnInit {

  constructor() { }
@Input('newHl') hl:HouseProperties;
  ngOnInit() {
  }

}

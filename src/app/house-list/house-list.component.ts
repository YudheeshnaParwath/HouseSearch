import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HouseService} from './../service/house.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
houseList: Array<any>;
error: string;
  constructor(private http:Http, private serv:HouseService) { }

  ngOnInit() {

    this.serv.getAllHouses()
    .subscribe(data=> this.houseList = data,
    error => this.error = error.statusText);

  }

}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HouseService {

  constructor(private http:Http) { }


getAllHouses()
{
  return this.http.get('data/HouseInfo.json').map(res=> res.json());
}
}

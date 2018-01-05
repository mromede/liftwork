import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    // console.log("here");
  }
  getUsers(){ 
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json())
  }
}

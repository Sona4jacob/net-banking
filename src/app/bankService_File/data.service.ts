import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data="data is created"
  serviceMethod(){
    alert("service alert")
  }
}

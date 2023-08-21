import { Component } from '@angular/core';
import { DataService } from '../bankService_File/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 sdata:any
  constructor(private datas:DataService){}
  ngOnInit():void{
    setTimeout(()=>{
      this.datas.serviceMethod()

    },2000)
    this.sdata=this.datas.data
  }
}

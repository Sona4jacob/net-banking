import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="HAPPY BANKING WITH US"
  data2="Account Number"

  login(){
    alert("button clicked")
  }
 accNum(event:any){
  console.log(event.target.value)
  
 }
 pass(event:any){
  console.log(event.target.value);
  
 }
}

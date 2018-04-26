import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template :`<h1>{{title}}</h1><br>
     <h1>{{name}}</h1>
     <h5>List of employee</h5><br/>
     <ul>
      <li *ngFor="let emp of employee">
      {{emp}}
      </li>
     </ul>
    <input #myInput type="text">
    <button (click)="logmessgae(myInput.value)">log</button><br/>
    <label>{{myInput.value}}<br/></label>
    
  
  `
})
export class AppComponent {
  title = 'Welcome Angular 5';
  name:string ="Demo App for Inline Template";
  employee:string[]= ["sunil","rout","prast"];   
  constructor(){

  }
  
  ngOnInt(){

  }

  logmessgae(value){
    console.log(value);
  }

}

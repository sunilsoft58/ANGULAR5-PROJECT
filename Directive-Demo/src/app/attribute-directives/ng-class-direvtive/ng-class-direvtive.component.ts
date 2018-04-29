import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-direvtive',
  //templateUrl: './ng-class-direvtive.component.html',
  styleUrls: ['./ng-class-direvtive.component.css'],
  template:`<p ngClass="lefttext backcolor textfont"> Assigning as a string ... </p>  
<p [ngClass]="['centertext','secondparabgcolor','secondparafont']"> assigning as array </p>  
<p [ngClass]="{ borderandBox: false, dark: false, changefont: changefont }"> Assigning as Object. <br> 
<button type="button" (click)="changefont=!changefont">change class On click.</button> </p>  
  `
})
export class NgClassDirevtiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

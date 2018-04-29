import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-direvtive',
//  templateUrl: './ng-style-direvtive.component.html',,
  styleUrls: ['./ng-style-direvtive.component.css'],
  template:`<p style="padding: 1rem" [ngStyle]="{'color': Red,'font-weight': 'Bold','font-size':'35px','borderBottom': borderStyle}"> Assigning Inline style to ngStyle </p>  
<p [ngStyle]="applyStylegreen">set style from the Component.</p>  
<p> <input type="button" (click)="ChangeColor()" value="Change color" /> </p>  
<p [ngStyle]="applygreenstyle==true?applyStylegreen:appStyleBlue">Change the Style based On Condition..</p>`

})
export class NgStyleDirevtiveComponent implements OnInit {
 public applygreenstyle:boolean =true;
 public borderStyle= '1px solid black';
  applyStylegreen = {
    'color': 'green',
    'font-weight': 'bold',
    'font-size': '45px',
    'borderBottom': this.borderStyle,
    'padding': '1rem'
  }
  appStyleBlue = {
    'color': 'blue',
    'font-weight': 'bold',
    'font-size': '45px',
    'borderBottom': this.borderStyle,
    'padding': '1rem'
  }; 
  constructor() { }
  ngOnInit() {
  }
  ChangeColor(): void {
    this.applygreenstyle = !this.applygreenstyle;
  }  

}

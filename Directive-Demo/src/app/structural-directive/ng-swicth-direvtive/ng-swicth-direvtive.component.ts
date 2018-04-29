import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swicth-direvtive',
  //templateUrl: './ng-swicth-direvtive.component.html',
  styleUrls: ['./ng-swicth-direvtive.component.css'],
  template:`
   <h3>Welcome ngSwitch</h3>
   <div [ngSwitch]="color">
      <div *ngSwitchCase="'Red'">Red color</div>
      <div *ngSwitchCase="Green">Green color</div>
      <div *ngSwitchCase="Blue">Blue color</div>
      <div *ngSwitchCase="Yellow">Yellow color</div>
      <div *ngSwitchDefault>Find color</div>
      
   </div>
  `
})
export class NgSwicthDirevtiveComponent implements OnInit {
   public color ="white";
  constructor() { }

  ngOnInit() {
  }

}

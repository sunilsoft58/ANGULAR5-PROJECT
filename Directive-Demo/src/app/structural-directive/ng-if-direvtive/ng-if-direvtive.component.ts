import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-direvtive',
  //templateUrl: './ng-if-direvtive.component.html',
  styleUrls: ['./ng-if-direvtive.component.css'],
  template:`
  <h1 style="text-align:center">Welcom structural directive(*ngif)</h1>
  <h5 *ngIf="false; else elseblock">
   <span style="font-size:30px">hellow world</span>
  </h5>
  <h5 *ngIf='display'>
   <span style="font-size:30px">hellow world</span>
  </h5>
   <ng-template #elseblock>
   <h4>Else block</h4>
   </ng-template>

   <div *ngIf="display;then thenBlock;else elseblock1"></div>

   <ng-template #thenBlock>
     <h2>...then block code executed...</h2>
   </ng-template>
   <ng-template #elseblock1>
    <h2>...else block code executed..</h2>
   </ng-template>
  `
})
export class NgIfDirevtiveComponent implements OnInit {
   public display=true;
  constructor() { }

  ngOnInit() {
  }

}

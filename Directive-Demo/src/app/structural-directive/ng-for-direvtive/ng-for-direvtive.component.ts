import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-direvtive',
  //templateUrl: './ng-for-direvtive.component.html',
  styleUrls: ['./ng-for-direvtive.component.css'],
  template:`
  <h3>*ngFor</h3>
  <div *ngFor="let color of colors; index as i">
   <span>{{i}} {{color}}</span>
  </div>
   <br/>
  <div *ngFor="let color of colors; first as f">
   <span>{{f}} {{color}}</span>
  </div>
  <br/>
  <div *ngFor="let color of colors; last as l">
   <span>{{l}} {{color}}</span>
  </div>
  <br/>
  <div *ngFor="let color of colors; even as e">
   <span>{{e}} {{color}}</span>
  </div>
  <br/>
    <div *ngFor="let color of colors; odd as o">
   <span>{{o}} {{color}}</span>
  </div>


  `
})
export class NgForDirevtiveComponent implements OnInit {

  public colors=["red","green","blue","yellow"];
  constructor() { }

  ngOnInit() {
  }

}

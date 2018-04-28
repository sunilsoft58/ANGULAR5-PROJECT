import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-list',
  //templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  template:`<h1>Department List</h1>
   <ul class="items">
   <li (click)="onSelect(department)" *ngFor="let department of departments">
   <span>{{department.id}}</span>{{department.Name}}
   </li>
   </ul>
  `
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":1,"Name":"Angular"},
    { "id": 2, "Name": "Node" },
    { "id": 3, "Name": "MangoDB" },
    { "id": 4, "Name": "Ruby" },
    { "id": 5, "Name": "BootStrap" }
  ]

  constructor(private rouer: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.rouer.navigate(["/departments",department.id]);
  }

}

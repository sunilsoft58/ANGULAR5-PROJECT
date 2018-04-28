import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  //templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  template:`<h3>Department id is : {{departmentId}}</h3>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>

  `
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute,private router : Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get("id"));
    //this.departmentId=id;
    this.route.paramMap.subscribe((parms:ParamMap)=>{
     let id = parseInt(parms.get("id"));
     this.departmentId =id; 
    })
  }

  goPrevious(){
   let previousId = this.departmentId -1;
    this.router.navigate(["/departments",previousId]);

  }

  goNext(){
    let nextId= this.departmentId+1;
    this.router.navigate(["/departments",nextId]);
  }

}

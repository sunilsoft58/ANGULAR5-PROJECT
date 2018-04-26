import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employeeList =[];
  constructor(private employeeService : EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();  
   // this.getEditData();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.employeeService.selectedEmployee = {
      EmployeeID: null,
      FirstName: '',
      LastName: '',
      EmpCode: '',
      Position: '',
      Office: ''
    }
  }
  getEditData(){
    this.employeeService.getEmployeeList()
    // .subscribe(data=>this.employeeList =data); 
    .subscribe(data=>{this.employeeList =data;console.log(data)});
   }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null) {
      this.employeeService.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.employeeService.getEmployeeList1();       
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        },error =>{
          console.log(error)
        });
    }
    else {
      this.employeeService.putEmployee(form.value.EmployeeID, form.value)
      .subscribe(x => {
        this.resetForm(form);
        this.employeeService.getEmployeeList1();   
        this.toastr.info('Record Updated Successfully!', 'Employee Register');
      },error=>{
        console.log(error)
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';  

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  columnDefs = [
    {headerName: 'FIRST NAME', field: 'FirstName' },
    {headerName: 'LAST NAME', field: 'LastName' },
    {headerName: 'POSITION', field: 'Position'}
];  
// columnDefs = [
//   {headerName: 'Make', field: 'make' },
//   {headerName: 'Model', field: 'model' },
//   {headerName: 'Price', field: 'price'},
 
// ];

// rowData = [
//   { make: 'Toyota', model: 'Celica', price: 35000 },
//   { make: 'Ford', model: 'Mondeo', price: 32000 },
//   { make: 'Porsche', model: 'Boxter', price: 72000 }
// ];
  public employeeList =[];
  rowData: any;

  constructor(private employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {    
    this.rowData=
      this.employeeService.getEmployeeList()    
     .subscribe(data=>{this.employeeList =data;console.log(data)});    
          
  }
  showForEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);;
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(id)
      .subscribe(x => {
        this.employeeService.getEmployeeList().subscribe(data=>this.employeeList =data);
        //this.employeeService.getEmployeeList1();
        this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }

}

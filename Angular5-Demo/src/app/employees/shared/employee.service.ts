import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {  Response, RequestMethod } from "@angular/http";
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';
import { IEmployee } from './employee.model';
//import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  selectedEmployee : Employee;
  employeeList : Employee[];
  constructor(private http : HttpClient) { }

  postEmployee(emp : Employee){
    var body = emp;  
    return this.http.post('http://localhost:57307/api/Employee',body);

  }
  putEmployee(id, emp) {
    var body = emp;
    return this.http.put('http://localhost:57307/api/Employee/' + id, body);
  }

  getEmployeeList():Observable<any[]>{
   return this.http.get<any[]>('http://localhost:57307/api/Employee');
   
  }
  getEmployeeList1(){
    return this.http.get('http://localhost:57307/api/Employee')
    .subscribe((data:any)=>{this.employeeList=data,console.log(data)});
    
   }

  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:57307/api/Employee/' + id);
  }
}

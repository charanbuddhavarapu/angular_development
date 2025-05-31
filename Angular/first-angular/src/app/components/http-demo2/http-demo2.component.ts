import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { EmployeeMode } from '../../model/employee-mode';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {

  //Injecting the service
  constructor(private employeeService: EmployeeService, private httpClient: HttpClient){

  }
  employees: EmployeeMode[] = [];

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(response=>{
      this.employees = response;
    })
  }

  fetchEmployees() {
    this.employeeService.getEmployees().subscribe((response: EmployeeMode[]) => {
      console.log(response);
      this.employees = response;
    })
  }
  fetchUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      console.log(response)
    })

}}

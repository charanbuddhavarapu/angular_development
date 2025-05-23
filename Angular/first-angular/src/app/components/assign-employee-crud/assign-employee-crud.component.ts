import { Component } from '@angular/core';
import { EmployeeADDComponent } from '../employee-add/employee-add.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-assign-employee-crud',
  imports: [EmployeeADDComponent,EmployeeTableComponent],
  templateUrl: './assign-employee-crud.component.html',
  styleUrl: './assign-employee-crud.component.css'
})
export class AssignEmployeeCRUDComponent {

    employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  deleteFromParent(deleteID : number){
    console.log(deleteID);
    this.employees = this.employees.filter(emp => emp.eId != deleteID)
  }

  addEmpFromForm(addEmpEmit : any){
    
    this.employees.push(addEmpEmit)
    
  }
}

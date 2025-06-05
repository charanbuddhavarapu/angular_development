
import { Component, inject } from '@angular/core';

import { IEmployee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/subjects/employee.service';


@Component({
  selector: 'app-subject-assign',
  imports: [CommonModule,FormsModule],
  templateUrl: './subject-assign.component.html',
  styleUrl: './subject-assign.component.css'
})
export class SubjectAssignComponent {

  private employeeService = inject(EmployeeService);
 employees: IEmployee[] = [];
  newEmployee: IEmployee = {
    id: '',
    firstName: '',
    lastName: '',
    sal: 0,
    gender: '',
    email: ''
  };

  constructor() {
    this.employeeService.employees$.subscribe(data => {
      this.employees = data;
    });
  }
    addEmployee() {
    this.employeeService.addEmployee({ ...this.newEmployee });
    this.newEmployee = { id: '', firstName: '', lastName: '', sal: 0, gender: '' ,email:''};
  }
  deleteEmployee(eId: string): void {
  this.employeeService.deleteEmployee(eId);
}

  clearEmployees() {
    this.employeeService.clearEmployees();
  }


}

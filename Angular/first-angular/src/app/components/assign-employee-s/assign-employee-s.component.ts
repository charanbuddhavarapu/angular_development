import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assign-employee-s',
  imports: [FormsModule],
  templateUrl: './assign-employee-s.component.html',
  styleUrl: './assign-employee-s.component.css'
})
export class AssignEmployeeSComponent {

  selectedGender: string = 'all';
  employees: any[] = [];

  constructor(private empService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    switch (this.selectedGender) {
      case 'male':
        this.employees = this.empService.getMaleEmployees();
        break;
      case 'female':
        this.employees = this.empService.getFemaleEmployees();
        break;
      default:
        this.employees = this.empService.getAllEmployees();
    }
  }

  
}

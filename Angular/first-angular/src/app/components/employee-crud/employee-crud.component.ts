import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EMPLOYEE_ADDED_MESSAGE } from '../../constants/message_constants';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatSnackBarModule,
    EmployeeModalComponent,
    FormsModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  faTrash = faTrash;
  faEye = faEye;
  faPlus = faPlus;

  selectedEmployee: any = null;

  newEmployee = {
    eId: '',
    name: '',
    sal: '',
    gender: ''
  };

  constructor(private snackBar: MatSnackBar) {}

  deleteEmployee(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This employee will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(index, 1);
        Swal.fire('Deleted!', 'Employee has been removed.', 'success');
      }
    });
  }

  viewEmployee(emp: any) {
    this.selectedEmployee = emp;
    setTimeout(() => {
      const modalEl = document.getElementById('viewModal');
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    }, 100);
  }

  addEmployee() {
    if (
      this.newEmployee.eId &&
      this.newEmployee.name &&
      this.newEmployee.sal &&
      this.newEmployee.gender
    ) {
      this.employees.push({
        eId: Number(this.newEmployee.eId),
        name: this.newEmployee.name,
        sal: Number(this.newEmployee.sal),
        gender: this.newEmployee.gender
      });

      this.newEmployee = {
        eId: '',
        name: '',
        sal: '',
        gender: ''
      };

      this.snackBar.open(EMPLOYEE_ADDED_MESSAGE, 'Close', {
        duration: 7000
      });
    }
  }
}

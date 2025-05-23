import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

  

@Component({
  selector: 'app-employee-add',
  imports: [  FormsModule,CommonModule, FontAwesomeModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs : ['addEmpEmit']
})
export class EmployeeADDComponent {
  faPlus = faPlus
  addEmpEmit = new EventEmitter()
  newEmployee = {
    eId: '',
    name: '',
    sal: '',
    gender: ''
  };

  addEmployee() {
    if (
      this.newEmployee.eId &&
      this.newEmployee.name &&
      this.newEmployee.sal &&
      this.newEmployee.gender
    ) {

      console.log(this.newEmployee, "Hiii");
      
      this.addEmpEmit.emit(this.newEmployee)
      this.newEmployee = {
        eId: '',
        name: '',
        sal: '',
        gender: ''
      };

  

    }
  }
}

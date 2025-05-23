import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEye, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee-table',
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs :['employees'],
  outputs:['deleteId']

})
export class EmployeeTableComponent {

  faTrash = faTrash
  employees : any

  deleteId = new EventEmitter();
  sendDeleteIdToParent(eId : number){
    this.deleteId.emit(eId);
    console.log(eId)
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEmployee } from '../../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesSubject = new BehaviorSubject<IEmployee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor() {
    // Optional: Add initial sample data
    const sampleEmployees: IEmployee[] = [
      { id: '101', firstName: 'John', lastName: 'Doe', sal: 50000, gender: 'Male',email:"abc123@gmail.com" },
      { id: '102', firstName: 'Jane', lastName: 'Smith', sal: 55000, gender: 'Female' ,email:"cbvf@gmail.com"}
    ];
    this.employeesSubject.next(sampleEmployees);
  }

  addEmployee(employee: IEmployee): void {
    const currentEmployees = this.employeesSubject.getValue();
    this.employeesSubject.next([...currentEmployees, employee]);
  }

  deleteEmployee(eId: string): void {
    const currentEmployees = this.employeesSubject.getValue();
    const updatedEmployees = currentEmployees.filter(emp => emp.id !== eId);
    this.employeesSubject.next(updatedEmployees);
  }

  clearEmployees(): void {
    this.employeesSubject.next([]);
  }
}
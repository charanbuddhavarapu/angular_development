import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import{ EmployeeMode } from '../model/employee-mode'

@Injectable({
  providedIn: 'root'
})
//This servcice will be used by http-demo2 component
export class EmployeeService {
  
  url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<EmployeeMode[]> {
    return this.httpClient.get<EmployeeMode[]>(this.url).pipe(
      map((response: EmployeeMode[]) => {
        return response.map(emp => new EmployeeMode(emp.id, emp.firstName, emp.lastName, emp.sal, emp.gender));
      })
    );
  }
}

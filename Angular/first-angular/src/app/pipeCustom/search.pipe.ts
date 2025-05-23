import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilter implements PipeTransform {
  transform(employees: any[], searchText: string): any[] {
    if (!searchText) return employees;

    const lowerSearch = searchText.toLowerCase();

    return employees.filter(emp =>
      emp.name.toLowerCase().includes(lowerSearch) ||
      emp.gender.toLowerCase() === lowerSearch ||
      emp.eId.toString().includes(lowerSearch) ||
      emp.sal.toString().includes(lowerSearch)
    );
  }
}

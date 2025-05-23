import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number): string {
    if (!value || value <= 0) return '';

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = '';

    for (let i = 0; i < values.length; i++) {
      while (value >= values[i]) {
        result += symbols[i];
        value -= values[i];
      }
    }

    return result;
  }

}

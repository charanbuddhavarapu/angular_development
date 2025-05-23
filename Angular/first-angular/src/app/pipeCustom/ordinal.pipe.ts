import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'ordinal'
})



export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '';

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;

    const suffix =
      v >= 11 && v <= 13 ? 'th' : suffixes[(v % 10)] || 'th'  //suffixes[6] - > undefined, so we go with undefined || 'th' then we get 'th' , kind of fallback mechanism

    return value + suffix;
  }

}
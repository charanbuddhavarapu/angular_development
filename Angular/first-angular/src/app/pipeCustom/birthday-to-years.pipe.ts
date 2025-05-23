import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayToYears'
})
export class BirthdayToYearsPipe implements PipeTransform {

  transform(birthDay : string): string {
    if (!birthDay) return '';

    const today = new Date();
    const birthDate = new Date(birthDay);

    let age =  today.getFullYear() -  birthDate.getFullYear()

    let month = today.getMonth() - birthDate.getMonth();

    let day = today.getDate() - birthDate.getDate();

    if(month<0 || (month<0 && day<0)){
      age--;
    }

    return age+" years old"
    
  }

}

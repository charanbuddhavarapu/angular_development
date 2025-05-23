import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipeCustom/ordinal.pipe';
import { RomanPipe } from '../../pipeCustom/num-to-roman.pipe';
import { BirthdayToYearsPipe } from '../../pipeCustom/birthday-to-years.pipe';
import { SalutationPipe } from '../../pipeCustom/salutation.pipe';
import { SearchFilter } from '../../pipeCustom/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes-assignment',
  imports: [OrdinalPipe,RomanPipe,BirthdayToYearsPipe,SalutationPipe,SearchFilter,FormsModule],
  standalone: true,
  templateUrl: './pipes-assignment.component.html',
  styleUrl: './pipes-assignment.component.css'
})
export class PipesAssignmentComponent {

  searchTerm: string = '';

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];


}

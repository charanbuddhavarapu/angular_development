import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipeCustom/remaining.pipe';
import { MySortPipe } from '../../pipeCustom/my-sort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,RemainingPipe,MySortPipe,FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userName :string = 'Rohit Sharma';
  salary : number = 5000;
  today : Date = new Date();
  user:object = {name:'charan' , age: 25 , gender:'male' }


  numArr: number[] = [10, 20, 30, 40, 50, 60, 70, 80];

  msg: string = '';
  msg2: string = '';

  num: number = 21;

  arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]
}
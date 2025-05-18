import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-assign',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding-assign.component.html',
  styleUrls: ['./databinding-assign.component.css']
})
export class DatabindingAssignComponent {
  //readmore variable, when true we can read more
  ShowParagraph : boolean = true

  //hiding info box
  isvisible : boolean = true

  //onclick, we toggle both
  onclick(): void{
    this.ShowParagraph  = !this.ShowParagraph;
    this.isvisible = !this.isvisible;


  }
 
  // 2. char count 100

  userInput: string = '';
  remainingChars: number = 100;

  updateRemainingChars() {
    this.remainingChars = 100 - this.userInput.length;
  }


  //3. Drop down with state names
  selectedState: string = '';



  //4. calculator
  num1 : number = 0;
  num2 : number = 0
  Operators : String[] =['+','-','*','/']
  selectedOperator : String ="";
  result : number | null = null; //we are setting the value of the result to either be a number or a null value
  calculate(){
    switch (this.selectedOperator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
      default:
        this.result = null;
        break;
  }

 
  
}
    //5 . Password
    inputType: string = 'password';

      togglePassword() {
        this.inputType = this.inputType === 'password' ? 'text' : 'password';
      }

    //6 . Increment, decrement, reset
    res : number = 0
    placeholder : string = "Increment/Decrement"

    increment(){
      this.res += 1
    }

    decrement(){
      this.res -= 1
    }
    reset(){
      this.res = 0
      this.placeholder = this.placeholder
    }


    //7. Theme Switching
   
    isDarkMode = false;

    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
    }


}

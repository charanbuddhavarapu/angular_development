import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInfo } from 'os';

@Component({
  selector: 'app-form-demo2',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
  user={
    name:'sachin',
    email:'sachin@gmail.com',
    gender:'male',
    
  }

  submitUserForm(userForm:NgForm){
    console.log(userForm);
    console.log(userInfo)
  }
}

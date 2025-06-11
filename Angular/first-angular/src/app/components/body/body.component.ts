import { Component } from '@angular/core';
import { SubjectAssignComponent } from '../subject-assign/subject-assign.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
//import { FormDemo3Component } from '../form-demo3/form-demo3.component';



@Component({
  selector: 'app-body',
  imports: [SubjectAssignComponent,FormDemo1Component,FormDemo2Component,RouterOutlet,NavbarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  

}

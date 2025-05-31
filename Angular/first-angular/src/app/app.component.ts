import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { DatabindingAssignComponent } from './components/databinding-assign/databinding-assign.component';
import { DBdemoComponent } from './components/dbdemo/dbdemo.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { ProductsComponent } from './components/products/products.component';
import { Demo1Component } from './components/demo1/demo1.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipesAssignmentComponent } from './components/pipes-assignment/pipes-assignment.component';
import { ParentComponent } from './components/parent/parent.component';
import { AssignEmployeeCRUDComponent } from './components/assign-employee-crud/assign-employee-crud.component';
import { Math1Component } from './components/math1/math1.component';
import { Math2Component } from './components/math2/math2.component';
import { AssignEmployeeSComponent } from './components/assign-employee-s/assign-employee-s.component';
import { HttpDemo1Component } from './components/http-demo1/http-demo1.component';
import { AssignHTTPComponent } from './components/assign-http/assign-http.component';
import { HttpDemo2Component } from './components/http-demo2/http-demo2.component';
import { Observabledemo1Component } from './components/observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from './components/observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from './components/observable-demo3/observable-demo3.component';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent,CategoriesComponent,CarouselComponent,FooterComponent,BodyComponent,DatabindingAssignComponent,DBdemoComponent
    ,DirectivesComponent,TableCardComponent,ProductsComponent,Demo1Component,EmployeeCRUDComponent,PipesComponent,
    PipesAssignmentComponent,ParentComponent,AssignEmployeeCRUDComponent,Math1Component,Math2Component,AssignEmployeeSComponent,
  HttpDemo1Component,AssignHTTPComponent,HttpDemo2Component,
  Observabledemo1Component, ObservableDemo2Component,ObservableDemo3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
}

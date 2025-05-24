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



@Component({
  selector: 'app-root',
  imports: [NavbarComponent,CategoriesComponent,CarouselComponent,FooterComponent,BodyComponent,DatabindingAssignComponent,DBdemoComponent
    ,DirectivesComponent,TableCardComponent,ProductsComponent,Demo1Component,EmployeeCRUDComponent,PipesComponent,
    PipesAssignmentComponent,ParentComponent,AssignEmployeeCRUDComponent,Math1Component,Math2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
}

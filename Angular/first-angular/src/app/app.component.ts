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


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,CategoriesComponent,CarouselComponent,FooterComponent,BodyComponent,DatabindingAssignComponent,DBdemoComponent
    ,DirectivesComponent,TableCardComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
}

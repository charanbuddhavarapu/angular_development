import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,CategoriesComponent, CarouselComponent, BodyComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project_sample';
}


//Every component will have 4 files : 
// 1.TS
//2. HTML
//3. CSS
//4. Unit test

//AppComponent is a class, whose name is app component. If we have to call it, we can call it using selector:'app-root'
//If anyone calls 'app-root' which is in index.html, then It will also load templateUrl, styleUrl and imports as well.

import { Component } from '@angular/core';
import { DataBindingComponent } from '../data-binding/data-binding.component';

@Component({
  selector: 'app-body',
  imports: [DataBindingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}

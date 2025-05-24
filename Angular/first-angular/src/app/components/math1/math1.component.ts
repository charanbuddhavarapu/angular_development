import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {

  //Math1Component is dependent on Math Service
  //we do dependency injection in a constructor

  //Peple prefer this syntax rather than the dep injection done in Math2Component.
  constructor(private mathService : MathService){
    
  }

  ngOnInit(){
    console.log(this.mathService.add(10,20));
  }

}

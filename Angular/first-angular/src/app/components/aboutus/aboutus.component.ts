import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  constructor(private router:Router){};

  doSomethingAndGoHome(){
    this.router.navigate(["/home"])
    console.log("First get this response, now you can go home");
  }
}

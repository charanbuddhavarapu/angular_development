import { Injectable } from '@angular/core';

//Injectable, directive, pipes are classes with @Injectable decorator, @directive Decorator, @Pipe Decorator

@Injectable({
  providedIn: 'root'
})
export class MathService {

  //constructor() { }
  // Any component can use all these methods
  add(a:number,b:number){
    return `Addition of ${a} and ${b} is ${a+b}`;
  }

  sub(a:number,b:number){
    return `Subtraction of ${a} and ${b} is ${a*b}`;
  }
  mul(a:number,b:number){
    return `Multiplication of ${a} and ${b} is ${a*b}`;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, forkJoin,mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {

  //ForkJoin can be used to join the data from different APIs
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.forkjoin_demo();
    this.mergeMap_demo();
    this.concatMap_demo();

  
 }

 forkjoin_demo(){
  const url1 = 'https:jsonplaceholder.typicode.com/users';//2sec
  const url2 = 'https:jsonplaceholder.typicode.com/comments';//3
  const url3 = 'https:jsonplaceholder.typicode.com/todos';//4
 

 let req1 = this.httpClient.get(url1);
 let req2 = this.httpClient.get(url2);
 let req3 = this.httpClient.get(url3);

 forkJoin([req1,req2,req3]).subscribe((responses)=>{
  console.log(responses)
 })
 }

 mergeMap_demo(){
  let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(mergeMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
 }

 concatMap_demo(){
  let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher.pipe(concatMap(userId => {
      return this.httpClient.get(`https://fakestoreapi.com/carts/${userId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
 }

}

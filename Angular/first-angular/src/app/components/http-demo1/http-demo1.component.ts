import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {

  user_url = 'http://jsonplaceholder.typicode.com/users';

  //invoking http client module
  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    this.fetchUserData_angular();
  }

  //Why subscribe? - 
  //{observe:body} by default, if we give as {observe:'response'}, we get all details like status code and everything as a response, just like in Postman.
  fetchUserData_angular(){
    this.httpClient.get(this.user_url,{observe:'response'}).subscribe(response =>{
      console.log(response);
    })
  }

  //fetch - returns promise, to read from promise - then and async await
  //httpCLient.get() - returns an Observable, to read data from it we use .subscribe(), it has 3 call backs
  //Observable is like promise only but way better than promise
  



}

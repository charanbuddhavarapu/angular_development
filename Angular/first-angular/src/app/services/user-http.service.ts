import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  users_url="http://localhost:3000/users";
  
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.users_url);
  }
  addUser(user: any) {
  return this.http.post(this.users_url, user);
}
deleteUser(id: number) {
  return this.http.delete(`${this.users_url}/${id}`);
}

updateUser(user: any) {
  return this.http.patch(`${this.users_url}/${user.id}`, user);
}

}

import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { UserHttpService } from '../../services/user-http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-http',
  imports: [FormsModule,CommonModule],
  templateUrl: './assign-http.component.html',
  styleUrl: './assign-http.component.css'
})
export class AssignHTTPComponent {
  user_data=inject(UserHttpService);
  users: any[] = [];
  isLoading: boolean = false;
  newUser = {
    id: '' ,
  name: '',
  email: '',
  address: {
    city: ''
  }
};


  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true;
    this.user_data.getUsers().subscribe(data => {
      this.users = data as any[];
      this.isLoading = false;
    });
  }
  addUser() {
    if (this.newUser.name && this.newUser.email) {
      this.user_data.addUser(this.newUser).subscribe(() => {
        this.newUser = {
          id:'',
  name: '',
  email: '',
  address: {
    city: ''
  }
};

      this.fetchUsers(); // Refresh list
      });
    }
  }

  editingUser: any = null;

editUser(user: any) {
  this.editingUser = { ...user }; // clone to edit safely
}

updateUser() {
  if (this.editingUser.name && this.editingUser.email && this.editingUser.address.city) {
    this.user_data.updateUser(this.editingUser).subscribe(() => {
      this.editingUser = null;
      this.fetchUsers();
    });
  }
}

cancelEdit() {
  this.editingUser = null;
}

deleteUser(id: number) {
  if (confirm('Are you sure you want to delete this user?')) {
    this.user_data.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    });
  }
}

}




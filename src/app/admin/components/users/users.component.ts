import { User } from './../../../auth/models/accounts.model';
import { ApiService } from './../../../auth/api/api.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user!: User;
  users!: User[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    //get all users
    this.api.getUsers().then((data) => (this.users = data.users || []));
    this.clear();

  }

  addUser() {
    if (this.user.id){
      return;
    }
    console.log(this.user)
    this.api.addUser(this.user);
  }

  clear() {
    this.user = new User();
  }

}

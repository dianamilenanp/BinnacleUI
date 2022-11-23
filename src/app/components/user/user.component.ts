import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  UserList: any = [];

  constructor(private userService: UserService) { }
  

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
       this.userService.getAllUsersData().subscribe((data: {}) => {
         this.UserList = data;
        });
      }
    
}

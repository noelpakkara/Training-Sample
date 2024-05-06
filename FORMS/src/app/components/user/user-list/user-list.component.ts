import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '9947630284',
        role: 'Admin',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '8765876545',
        role: 'User',
      },
      {
        id: 3,
        name: 'Rohit Doe',
        email: 'rohith@example.com',
        phone: '9999630284',
        role: 'Admin',
      },
      {
        id: 4,
        name: 'Jacob Smith',
        email: 'Jacob@example.com',
        phone: '8714805665',
        role: 'User',
      },
      {
        id: 5,
        name: 'Noel Akkara',
        email: 'noel@expeed.com',
        phone: '8714805692',
        role: 'Admin',
      },
    ];
  }

  addUser() {
    this.router.navigate(['new-user']);
  }
}

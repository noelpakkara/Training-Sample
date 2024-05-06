import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectedRole: string = 'Admin'; // Declare the selectedRole property

  onSubmit(userData: any) {
    debugger;
    if (userData.valid) {
      // Here you can access form data using formData.value
      console.log(userData.value);
      // You can send the form data to a service for further processing
      // For example, you can send it to an API endpoint
      this.router.navigate(['user-list']);
    } else {
      // If the form is invalid, you can display error messages or perform other actions
      console.log('Form is invalid.');
    }
  }
}

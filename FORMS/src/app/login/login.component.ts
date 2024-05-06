import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { loginInfo } from './loginInfo';
import { NotificationType, NotificationsService } from 'angular2-notifications';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signinInfo: loginInfo = new loginInfo();

  signinForm!: FormGroup;
  type = 'password';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private _notifications: NotificationsService,
    private router: Router,
    private userService: LoginService
  ) {}
  // passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: new FormControl(this.signinInfo.username, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.signinInfo.password, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(8),
        // Validators.pattern(this.passwordPattern),
      ]),
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.valid) {
      this.signinInfo.username = this.signinForm.value.username;
      this.signinInfo.password = this.signinForm.value.password;

      this.userService.signIn(this.signinInfo).subscribe((success: boolean) => {
        if (!success) {
          this._notifications.create(
            'Error',
            'Wrong username or password. Please try again!',
            NotificationType.Error
          );
        } else {
          this.router.navigate(['user-list']);
        }
      });
    } else {
      this._notifications.create(
        'Error',
        'Wrong username or password. Please try again!',
        NotificationType.Error
      );
    }
  }
}

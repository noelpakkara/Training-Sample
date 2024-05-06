import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { loginInfo } from './loginInfo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  signIn(loginInfo: loginInfo): Observable<boolean> {
    {
      if (
        loginInfo.username === 'noel.akkara@expeed.com' &&
        loginInfo.password == 'Rain@2022'
      ) {
        return of(true);
      } else {
        return of(false);
      }
    }
  }
}

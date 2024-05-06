import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  private messageSource = new BehaviorSubject<string>("Initial message");
  currentMessage = this.messageSource.asObservable();

  employees = [
    { id: 1, name: 'Giliya Jose', position: 'Developer' },
    { id: 2, name: 'Shefin Hameed', position: 'Designer' },
    { id: 3, name: 'Darsana V', position: 'Developer' },
    { id: 4, name: 'Maria John', position: 'Developer' },
    { id: 5, name: 'Sudhish S', position: 'Manager' },
    { id: 6, name: 'Noel P', position: 'Developer' },
    { id: 8, name: 'Sanjay ', position: 'Team Lead' },
    { id: 9, name: 'Anju Jose', position: 'Team Lead' }
  ];


  constructor() {}

  incrementCounter() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrementCounter() {
    this.counterSubject.next(this.counterSubject.value - 1);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find(employee => employee.id === id);
  }

}

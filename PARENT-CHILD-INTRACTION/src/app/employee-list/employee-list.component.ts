import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[] = [];

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.employees = this.sharedService.getEmployees();
  }

  addEmployee() {
    this.router.navigate(['/add-employee']);
  }
  editEmployee(employee: any) {
    this.router.navigate(['/edit-employee', employee.id]);

    // Navigate to the edit-employee route with query parameters
    // this.router.navigate(['/edit-employee'], { queryParams: { id: employee.id } });
  }
}

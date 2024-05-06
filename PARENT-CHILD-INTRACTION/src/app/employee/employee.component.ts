import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee = { id: 0, name: '', position: '' };
  heading = '';

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id > 0) {
        this.heading = 'Edit Employee';
         // Extract employee ID from URL
        // Fetch the corresponding employee data from the array
        const foundEmployee = this.findEmployeeById(id);
        if (foundEmployee) {
          // Bind the employee data to the form controls
          this.employee = foundEmployee;
        }
      }
      else {
        this.heading = 'Add Employee';
      }
    });

    // Subscribe to route query parameters
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      if (id > 0) {
        this.heading = 'Edit Employee';
        const foundEmployee = this.findEmployeeById(id);
        if (foundEmployee) {
          this.employee = foundEmployee;
        }
      }
      else {
        this.heading = 'Add Employee';
      }
    });

  }

  addEmployee() {
    
  }

  findEmployeeById(id: number) {
    // This is a placeholder function to simulate fetching data from an array
    return this.sharedService.getEmployees().find(employee => employee.id === id);
  }

  saveEmployee() {
    // Logic to save the edited employee data
    console.log('Employee saved:', this.employee);
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'', component: ParentComponent},
  {path:'service', component: CounterParentComponent},
  {path:'display-counter', component: CounterDisplayComponent},
  // { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: EmployeeComponent },
  { path: 'edit-employee/:id', component: EmployeeComponent },
  { path: 'edit-employee', component: EmployeeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

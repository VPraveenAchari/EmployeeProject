import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 
  {path:'signup',component:SignupComponent},
  {path:'employee-dashboard',component:EmployeeDashboardComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
 {path:'employee',component:EmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

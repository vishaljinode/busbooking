import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { BusComponent } from './booking/bus/bus.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { CustomersComponent } from './Pages/customers/customers.component';

const routes: Routes = [
  { path :'home',  component : BusComponent},  
  { path :'dashboard',  component : DashboardComponent},  
  { path :'employees',  component : EmployeesComponent},
  { path :'customers',  component : CustomersComponent},
  { path :'login',  component : LoginComponent},
  { path :'',  component : BusComponent},
  { path : '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

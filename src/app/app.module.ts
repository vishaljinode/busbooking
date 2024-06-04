import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { BusComponent } from './booking/bus/bus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatIconModule } from '@angular/material/icon';

import { DatePipe } from '@angular/common';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { CustomersComponent } from './Pages/customers/customers.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    EmployeesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
   ModalModule.forRoot(),
   MatIconModule
    
   
   
  ],
  providers: [ { provide: DateAdapter, useClass: NativeDateAdapter },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Signin } from './signin/signin';
import { Staff } from './staff/staff';
import { Reports } from './reports/reports';
import { Login } from './login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminSideNav } from './layout/admin-side-nav/admin-side-nav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material-module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    Dashboard,
    Signin,
    Staff,
    Reports,
    Login,
    AdminLayout,
    AdminHeader,
    AdminSideNav
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    MatTableModule
    

    
  ]
})
export class AdminModule { }

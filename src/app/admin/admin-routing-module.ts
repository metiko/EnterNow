import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard} from './dashboard/dashboard';
import { Reports } from './reports/reports';
import { Signin } from './signin/signin';
import { Staff } from './staff/staff';
import { Login } from './login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';

const routes: Routes = [
  { path: 'home', component: AdminLayout, children: [
      { path: 'admin-dashboard', component: Dashboard },
      { path: 'reports', component: Reports },
      { path: 'signin', component: Signin },
      { path: 'staff', component: Staff },
      { path: 'home', redirectTo: 'admin-dashboard', pathMatch: 'full' }

  ] },

  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceCapture } from './face-capture/face-capture';
import { Signout } from './signout/signout';
import { Signin } from './signin/signin';

const routes: Routes = [
  { path: 'face-capture', component: FaceCapture },
  { path: 'signin', component: Signin },
  { path: 'signout', component: Signout },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverHome1Component } from './driver-home1/driver-home1.component';

const routes: Routes = [
  {
    path:'home',
    component:DriverHome1Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }

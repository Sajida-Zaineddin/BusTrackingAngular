import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusCardComponent } from './bus-card/bus-card.component';
import { BusComponent } from './bus/bus.component';

const routes: Routes = [

 {
   path : 'buscard',
   component:BusCardComponent
} ,
{
  path : 'bus',
  component:BusComponent
} 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }

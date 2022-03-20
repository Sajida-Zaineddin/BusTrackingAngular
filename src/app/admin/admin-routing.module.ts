import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusCardComponent } from '../school/bus-card/bus-card.component';
import { BusComponent } from '../school/bus/bus.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';

const routes: Routes = [

  {
    path:'manageBus',
    component:ManageBusComponent
  },
  {
    path:'bus',
    component:BusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

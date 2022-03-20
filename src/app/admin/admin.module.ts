import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { SharedModule } from '../shared/shared.module';
import { ManageBusComponent } from './manage-bus/manage-bus.component';


@NgModule({
  declarations: [
    ContentComponent,
    DashboardComponent,
    CreateBusComponent,
    ManageBusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }

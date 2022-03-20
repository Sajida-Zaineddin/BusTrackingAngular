import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { BusComponent } from './bus/bus.component';
import { BusCardComponent } from './bus-card/bus-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BusComponent,
    BusCardComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    SharedModule
  ]
})
export class SchoolModule { }

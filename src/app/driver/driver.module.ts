import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverHome1Component } from './driver-home1/driver-home1.component'
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    DriverHome1Component
  ],
  imports: [
    SharedModule,
    GoogleMapsModule,
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }

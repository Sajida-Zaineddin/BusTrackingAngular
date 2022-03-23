import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AboutusEditComponent } from './aboutus-edit/aboutus-edit.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CTestComponent } from './c-test/c-test.component';




@NgModule({
  declarations: [
    AboutusEditComponent,
    TestimonialComponent,
    CTestComponent,
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
       
  ]
})
export class AdminModule { }

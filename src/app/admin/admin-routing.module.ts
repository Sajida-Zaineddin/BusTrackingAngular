import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'bus',
    component:ManageBusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
   {
    path:'testimonial',
    component:TestimonialComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

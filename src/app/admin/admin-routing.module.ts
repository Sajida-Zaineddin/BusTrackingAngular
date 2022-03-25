import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusEditorComponent } from './aboutus-editor/aboutus-editor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BusComponent } from './bus/bus.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginManegeDataComponent } from './login-manege-data/login-manege-data.component';
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
    component:BusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
   {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'aboutusEditor',
    component:AboutusEditorComponent
  },
  {
    path:'loginManage',
    component:LoginManegeDataComponent
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

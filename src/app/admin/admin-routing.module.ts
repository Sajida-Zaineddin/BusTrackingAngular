import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusEditorComponent } from './aboutus-editor/aboutus-editor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

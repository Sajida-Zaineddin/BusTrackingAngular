import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SchoolModule } from './school/school.module';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactusComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'account',
    loadChildren:()=>AuthModule
  },
  {
    path:'school',
    loadChildren:()=>SchoolModule
  },
  {
    path:'admin',
    loadChildren:()=>AdminModule
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

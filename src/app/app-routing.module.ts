import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AutherizationDriverGuard } from './autherization-driver.guard';
import { AutherizationGuard } from './autherization.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DriverModule } from './driver/driver.module';
import { HomeComponent } from './home/home.component';
import { ParentGuardGuard } from './parent-guard.guard';
import { ParentModule } from './parent/parent.module';
import { TeacherModule } from './teacher/teacher.module';
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
    path:'admin',
    loadChildren:()=>AdminModule,
    canActivate:[AutherizationGuard]
  },
  {
    path:'teacher',
    loadChildren:()=>TeacherModule,
  
  },
  {
    path:'auth',
    loadChildren:()=>AuthModule
  },
  {
    path:'driver',
    loadChildren:()=>DriverModule,
    canActivate:[AutherizationDriverGuard]
    
  },
  {
    path:'parent',
    loadChildren:()=>ParentModule,
    canActivate:[ParentGuardGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

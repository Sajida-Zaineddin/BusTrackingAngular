import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusEditorComponent } from './aboutus-editor/aboutus-editor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BusComponent } from './bus/bus.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { LoginManegeDataComponent } from './login-manege-data/login-manege-data.component';
import { RoleComponent } from './role/role.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserComponent } from './user/user.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { WebsiteComponent } from './website/website.component';
import { RouteComponent } from './route/route.component';
import { EditPorfileAdminComponent } from './edit-porfile-admin/edit-porfile-admin.component';


const routes: Routes = [
  // {
  //   path:'dashboard',
  //   component:DashboardComponent
  // },
  {
    path:'role',
    component:RoleComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'loginManage',
    component:LoginManegeDataComponent
  },
  {
    path:'bus',
    component:BusComponent
  },
  {
    path:'student',
    component:ManageStudentComponent
  },
  {
    path:'attendance',
    component:ManageAttendanceComponent
  },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'contact',
    component:ManageContactUsComponent
  },
  {
    path:'footer',
    component:ManageFooterComponent
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
    path:'webHome',
    component:WebsiteHomeComponent
  },
  {
    path:'website',
    component:WebsiteComponent
  },
  {
    path:'route',
    component:RouteComponent
  },
  {
    path:'editeprofileadmie',
    component:EditPorfileAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

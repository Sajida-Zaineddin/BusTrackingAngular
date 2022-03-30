import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAttendanceComponent } from './child-attendance/child-attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SearchStudentNameComponent } from './search-student-name/search-student-name.component';

const routes: Routes = [{
  path:'editProfile',
  component:EditProfileComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'attendance',
  component:ChildAttendanceComponent
},
{
  path:'search',
  component:SearchStudentNameComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

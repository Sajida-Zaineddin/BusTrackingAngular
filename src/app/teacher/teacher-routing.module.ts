import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SearchStudentNameComponent } from './search-student-name/search-student-name.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path:'editProfile',
  component:EditProfileComponent
},
{
  path:'dashboard',
  component:DashboardComponent
},

{
  path:'search',
  component:SearchStudentNameComponent
},

{
  path:'test',
  component:TestComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
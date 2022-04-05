import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { SharedModule } from '../shared/shared.module';
import { SearchStudentNameComponent } from './search-student-name/search-student-name.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EditProfileComponent,
    SearchStudentNameComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
  ]
})
export class TeacherModule { }

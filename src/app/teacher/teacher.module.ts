import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChildAttendanceComponent } from './child-attendance/child-attendance.component';
import { SharedModule } from '../shared/shared.module';
import { SearchStudentNameComponent } from './search-student-name/search-student-name.component';
import { DayAttendanceComponent } from './day-attendance/day-attendance.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DashboardComponent,
    EditProfileComponent,
    ChildAttendanceComponent,
    SearchStudentNameComponent,
    DayAttendanceComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
  ]
})
export class TeacherModule { }

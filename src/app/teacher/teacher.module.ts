import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeComponent } from './home/home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';


@NgModule({
  declarations: [
      HomeComponent,
      StudentProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
  ]
})
export class TeacherModule { }
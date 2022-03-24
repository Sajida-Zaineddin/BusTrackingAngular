import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBusComponent } from './manage-bus/manage-bus.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';


@NgModule({
  declarations: [
    ContentComponent,
    DashboardComponent,
    ManageBusComponent,
    ManageAttendanceComponent,
    ManageStudentComponent,
    ManageContactUsComponent,
    ManageFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

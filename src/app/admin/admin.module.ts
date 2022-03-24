import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAttendanceComponent } from './manage-attendance/manage-attendance.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { ManageContactUsComponent } from './manage-contact-us/manage-contact-us.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutusEditorComponent } from './aboutus-editor/aboutus-editor.component';


@NgModule({
  declarations: [
    ContentComponent,
    DashboardComponent,
    ManageAttendanceComponent,
    ManageStudentComponent,
    ManageContactUsComponent,
    ManageFooterComponent,
    AboutusComponent,
    TestimonialComponent,
    AboutusEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
 
  ]
})
export class AdminModule { }

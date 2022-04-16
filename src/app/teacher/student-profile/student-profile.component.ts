import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(public student : StudentService , public attendens : AttendanceService) { }

  name:any |undefined
  round:any
  busnumber:any
  ngOnInit(): void {
    this.attendens.StudentAttendeansWithId({id:this.student.studentid});
    setTimeout(() => {
      this.name=this.attendens.studentAttendens[0].name
      this.round=this.attendens.studentAttendens[0].roundStatus
      this.busnumber=this.attendens.studentAttendens[0].busnumber
    }, 2000);
  }
}

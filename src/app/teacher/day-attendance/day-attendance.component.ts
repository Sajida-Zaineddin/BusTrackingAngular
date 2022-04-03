import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { BusService } from 'src/app/Services/bus.service';
import { RoundStatusService } from 'src/app/Services/round-status.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-day-attendance',
  templateUrl: './day-attendance.component.html',
  styleUrls: ['./day-attendance.component.css']
})
export class DayAttendanceComponent implements OnInit {

  constructor(public home:AttendanceService,public homeStudent:StudentService, public dialog: MatDialog
    , public homebus: BusService, public round:RoundStatusService)
 { }

  ngOnInit(): void {
    this.round.getAll();
    this.home.getAll();
    this.homebus.getTeachers();
    // this.round.getGetRoundStatus();
    this.home.GETATTENDANCESTATUS();
     this.home.GETBUSNUMBER();
    this.home.GETSTUDENTNAME();

  }

  


search(fullName :any){
this.homeStudent.GetStudentListByTeacher(fullName);
//console.log(this.homeStudent.GetStudentListByTeacher(name));
 

}




////////////////////////////////////////

attData: any = [];

  student:any= [];

  status :any=[];
  parentname :any=[];
  busnumber:any=[];
  email:any="";


  




 openUpdateDailog(id1 : any ,dateofattendance1 : any , status1 : any , name1:any , busnumber1:any){

     this.home.update

    this.attData = {
      id: id1,
      dateofattendance1:dateofattendance1,
      status1:status1,
      name: name1,
      busnumber1:busnumber1,

    }


  }
  sendEmail(Email:any){
this.home.sendEmail
this.email=this.student.getAll.email
  }

 





}

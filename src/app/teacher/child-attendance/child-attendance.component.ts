

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { RoundStatusService } from 'src/app/Services/round-status.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-child-attendance',
  templateUrl: './child-attendance.component.html',
  styleUrls: ['./child-attendance.component.css']
})
export class ChildAttendanceComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>
  @ViewChild('callCreateDialog1') callCreateDialog1! :TemplateRef<any>
  attendanceData: any = []
  attendance1:any=[];

  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    dateofattendance: new FormControl(),
    status:new FormControl(),
    name:new FormControl(),
    busnumber:new FormControl(),

 })

 CreateForm :FormGroup =new FormGroup({  
  dateofattendance:new FormControl(''),
  status:new FormControl(''),    
  name:new FormControl(''),
  busnumber:new FormControl(''),

})

CreateForm1 :FormGroup =new FormGroup({  
  status:new FormControl(''),    
  busnumber:new FormControl('')

})
  constructor(public home:AttendanceService,public round:StudentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.home.getAll();
    this.round.getGetRoundStatus();
    this.home.GETATTENDANCESTATUS();
    this.home.GETBUSNUMBER();
    this.home.GETSTUDENTNAME();

  }
  save() {
    console.log(this.CreateForm.value);
    this.home.create(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.home.getAll();
    this.dialog.open(this.callCreateDialog)
 
  }
  openCreatedialog1() {
    this.home.getAll();
    this.dialog.open(this.callCreateDialog)
 
  }

  openDeleteDialog(id1: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.home.delete(id1);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");

      }
    })

  }

  openUpdateDailog(id1: any, dateofattendance1: any, status1: any,name1:any ,busnumber1:any) {
      this.home.GETATTENDANCESTATUS();
this.home.update
      this.attendance1 = {
        id: id1,
        dateofattendance:dateofattendance1,
        status:status1,
        name:name1,
        busnumber:busnumber1,
   
      }
    this.UpdateForm.controls['id'].setValue(id1);
    this.dialog.open(this.callUpdateDailog);
    // this.UpdateForm.controls['id'].setValue(id1);
    // this.UpdateForm.controls['dateofattendance'].setValue(dateofattendance1);
    // this.UpdateForm.controls['name'].setValue(name1);
    // this.UpdateForm.controls['busnumber'].setValue(busnumber1);
    // this.dialog.open(this.callUpdateDailog)

  }
 


  update() {
  
      this.home.update(this.UpdateForm.value);
      window.location.reload();
   }
   showStudentList(){
     console.log(this.CreateForm1.value);
     
     this.CreateForm1.value

     const obj={
      name:this.CreateForm1
    }
    this.home.GetStudentList();

    // this.dialog.open(this.callCreateDialog1)
   }
  }





import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BusComponent } from 'src/app/admin/bus/bus.component';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { BusService } from 'src/app/Services/bus.service';
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
  @ViewChild('callselectDialog') callselectDialog! :TemplateRef<any>

  constructor(public home:AttendanceService,public homeStudent:StudentService, public dialog: MatDialog
    , public homebus: BusService , public router:Router)
 { }

  ngOnInit(): void {
   
    this.home.getAll();
    this.homebus.getTeachers();
    // this.round.getGetRoundStatus();
    this.home.GETATTENDANCESTATUS();
     this.home.GETBUSNUMBER();
    this.home.GETSTUDENTNAME();

  }

  
selectForm :FormGroup =new FormGroup({  
  fullName:new FormControl('')
})

search(fullName :any){
this.homeStudent.GetStudentListByTeacher(fullName);
//console.log(this.homeStudent.GetStudentListByTeacher(name));
 

}

openCreatedialog() {
  this.home.getAll();
  this.dialog.open(this.callCreateDialog)

}


////////////////////////////////////////

attData: any = [];

  student:any= [];

  status :any=[];
  parentname :any=[];
  busnumber:any=[];


  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    dateofattendance:new FormControl(),
    status:new FormControl(),
    name:new FormControl(),
    busnumber:new FormControl(),

 })

 CreateForm :FormGroup =new FormGroup({  
  dateofattendance:new FormControl('',Validators.required),
  status:new FormControl('',Validators.required),    
  name:new FormControl('',Validators.required),
  busnumber:new FormControl('',Validators.required)

})




 openUpdateDailog(id1 : any ,dateofattendance1 : any , status1 : any , name1:any , busnumber1:any){

     this.home.update

    this.attData = {
      id: id1,
      dateofattendance1:dateofattendance1,
      status1:status1,
      name: name1,
      busnumber1:busnumber1,

    }


    this.dialog.open(this.callUpdateDailog)
    this.UpdateForm.controls['id'].setValue(id1);

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

  update()
    {
     
      this.home.update(this.UpdateForm.value);

      window.location.reload();
    }

    save(){
      console.log(this.CreateForm.value);
      
      this.home.create(this.CreateForm.value);
      window.location.reload();
    }

    ShowAttendance(ev:any){
      this.busnumber=ev.target.value;
    // console.log(ev.target.value);
    }

    DayAttendance(){
      var bus = this.busnumber;

      this.home.GETSTUDENTLIST(bus)
      console.log(bus)

      this.router.navigate(['teacher/manageAttendance'])
 
    }

    

}
  



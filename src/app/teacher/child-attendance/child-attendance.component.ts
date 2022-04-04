

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
    , public homebus: BusService , public router:Router , public round:RoundStatusService)
 { }

 username: any = localStorage.getItem('name')

  ngOnInit(): void {
   
    this.home.GETTEACHERINFONEW({
      username: this.username
    });
  

    // this.round.getAll();
     this.home.getAll();
    // this.homebus.getTeachers();
    // // this.round.getGetRoundStatus();
     this.home.GETATTENDANCESTATUS();
    //  this.home.GETBUSNUMBER();
    // this.home.GETSTUDENTNAME();
    setTimeout(() => {
    console.log('test',this.home.TeacherInfo)
  }, 1200);
  }

  

Values:any=[];
attData: any = [];
student:any= [];
status :any=[];
parentname :any=[];
busnumber:any=[];
fullName:any=[];

  
  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    dateofattendance:new FormControl(),
    status:new FormControl(),
    name:new FormControl(),
    busnumber:new FormControl(),

 })

 CreateForm :FormGroup =new FormGroup({  
  dateofattendance:new FormControl(''),
  status:new FormControl(''),
  name: new FormControl(''),
// username:new FormControl(''),
  busnumber:new FormControl(''),
  fullName:new FormControl(''),
  email : new FormControl('')
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
    
save(name:any , dateofattendance:any, busnumber:any , status:any){
  this.Values = {
    name:name ,
    dateofattendance:dateofattendance,
    busnumber:Number(busnumber),
    status:status

  }
  console.log(typeof busnumber)
  this.CreateForm.controls['name'].setValue(this.Values.name);
  this.CreateForm.controls['dateofattendance'].setValue(Date.now);
   this.CreateForm.controls['busnumber'].setValue(this.Values.busnumber);
     console.log(this.CreateForm.value);
     this.home.create(this.CreateForm.value);
     //this.CreateForm.controls['name'].setValue(name);
     console.log(this.CreateForm.value);
 
   }


  update()
    {
     
      this.home.update(this.UpdateForm.value);

      window.location.reload();
    }

    save1(){
      console.log(this.CreateForm.value);
      
      this.home.create(this.CreateForm.value);
      window.location.reload();
    }
   
     

    ShowAttendance(ev:any){
      this.username=ev.target.value;
   console.log(ev.target.value);
         console.log( typeof ev.target.value)
    }


 DayAttendance(){
   const username = this.username;

     this.home.GETTEACHERINFONEW(username);

    console.log(  username)
      console.log( typeof username)
      //this.router.navigate(['teacher/manageAttendance'])
      return username

    }


}
  



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Values:any=[];
  studentName:any;

  constructor(public home:AttendanceService ,private router:Router ,public student:StudentService) { }

  ngOnInit(): void {
    this.home.GETTEACHERINFONEW({username:localStorage.getItem('name')})
    this.home.GETATTENDANCESTATUS();
  }

  CreateForm :FormGroup =new FormGroup({  
    name: new FormControl(''),
    status:new FormControl(''),
    busnumber:new FormControl('') ,
    dateofattendance:new FormControl('')   
  })


  save(name1:any , busnumber1:any ){
  
    this.Values = {
      name:name1 ,      
      busnumber:Number(busnumber1),
      status:this.CreateForm.controls['status'].value,
      dateofattendance:Date.now
    }
    this.CreateForm.controls['name'].setValue(this.Values.name);  
     this.CreateForm.controls['busnumber'].setValue(this.Values.busnumber);
     this.CreateForm.controls['dateofattendance'].setValue(Date.now);
     this.home.create(this.Values);
     console.log('sdsdd',this.Values);
  }

  prnts(){
    console.log('f',this.CreateForm.controls['status'].value);
  }

  ArrivalEmail(name1:any, email1:any, fullName1:any){
    let emailObj=
    {
            name:name1,
            email:email1,
            fullName:fullName1
    }
      console.log(emailObj);
      this.home.SendArrivalEmail(emailObj);
    }

   AbsentEmail(name1:any,  email1:any, fullName1:any){
    let emailObj2={
      name:name1,
      email:email1,
      fullName:fullName1,}
      console.log(emailObj2);
    this.home.SendAbsentEmail(emailObj2);
    }
    pasa(id :any){
      this.student.studentid=id;
      this.router.navigate(['teacher/studentpage'])
      
    }

}

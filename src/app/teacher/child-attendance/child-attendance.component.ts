import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceService } from 'src/app/Services/attendance.service';

@Component({
  selector: 'app-child-attendance',
  templateUrl: './child-attendance.component.html',
  styleUrls: ['./child-attendance.component.css']
})
export class ChildAttendanceComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>
  attendanceData: any = []

  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    dateofattendance: new FormControl(),
    status:new FormControl(),
    name:new FormControl(),
    busnumber:new FormControl(),

 })

 CreateForm :FormGroup =new FormGroup({  
  dateofattendance:new FormControl('',Validators.required),
  status:new FormControl('',Validators.required),    
  name:new FormControl('',Validators.required),
  busnumber:new FormControl('',Validators.required),

})
  constructor(public home:AttendanceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.home.getAll();
    this.home.GETATTENDANCESTATUS();
    this.home.GETBUSNUMBER();
    this.home.GETSTUDENTNAME();
    this.home.GetStudentList();
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


  // openUpdateDialog(id1: any, abouttext1: any, city1: any, phone1: any,email1:any) {

  //   this.footerData = {
  //     id: id1,
  //     abouttext: abouttext1,
  //     city: city1,
  //     phone: phone1,
  //     email:email1

  //   }
  //   this.UpdateForm.controls['id'].setValue(id1);

  //   // this.home.getAll();

  //   this.dialog.open(this.callUpdateDailog)

  // }

  update() {
    this.home.update(this.UpdateForm.value);
    window.location.reload();

  }


}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Services/student.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>

  studentData: any = []
  student:any= [];

  status :any=[];
  parentname :any=[];
  busnumber:any=[];


  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    name: new FormControl(),
    xhome:new FormControl(),
    yhome:new FormControl(),
    grade:new FormControl(),
    roundStatus:new FormControl(),
    fullName:new FormControl(),
    busnumber:new FormControl()
 })

 CreateForm :FormGroup =new FormGroup({  
  name:new FormControl('',Validators.required),
  xhome:new FormControl('',Validators.required),    
  yhome:new FormControl('',Validators.required),
  grade:new FormControl('',Validators.required),
  roundStatus:new FormControl('',Validators.required),
  fullName:new FormControl('',Validators.required),
  busnumber:new FormControl('',Validators.required),

})



  constructor(public dialog: MatDialog,public home:StudentService) { }

  ngOnInit(): void {
    this.home.getAll();
    this.home.getGetRoundStatus();
    this.home.GetBusNum();
    this.home.GetParentName();
  }

  openUpdateDailog(id1: any, name1: any, xhome1: any,yhome1:any ,grade1:any,roundStatus1: any ,fullName1:any ,busnumber1:any) {
    console.log(id1,name1);
    this.home.update

    this.studentData = {
      id: id1,
      name: name1,
      xhome:xhome1,
      yhome:yhome1,
      grade:grade1,
      roundStatusstatus:roundStatus1,
      fullName:fullName1,
      busnumber:busnumber1
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

    openCreatedialog() {
      this.home.getAll();
      this.dialog.open(this.callCreateDialog)
  
    }
  
  

}

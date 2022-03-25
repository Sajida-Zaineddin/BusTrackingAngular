import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>

  userValues: any = {}

  constructor(private dialog:MatDialog, public userservice:UserService) { }

  CreateForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    imagepath: new FormControl(),
    rolename: new FormControl('', Validators.required)
  })

  UpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    imagepath: new FormControl(),
    rolename: new FormControl()
  })

  ngOnInit(): void {
    this.userservice.getUsers();
  }

  save()
  {
    console.log(this.CreateForm.value);
    this.userservice.createUser(this.CreateForm.value);
    window.location.reload();
  }

  update()
  {
    console.log( this.userservice.user);
    this.userservice.updateUser(this.UpdateForm.value);
    window.location.reload();
  }

  uploadFile(file:any)
  {
    if(file.length===0){
      return;
    }
    let fileUpload=<File>file[0];
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.userservice.uploadAttachment(fromData);
  }

  openCreateDialog() {
    this.userservice.getRole();
    this.dialog.open(this.callCreateDialog)
  }

  openDeleteDialog(userId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.userservice.deleteUser(userId);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })
  }

  openUpdateDialog(ids: any, name: any, mail: any, mobile: any, image: any, role: any) {
   
    this.userValues = {
      id: ids,
      fullName: name,
      email: mail,
      phone: mobile,
      imagepath: image,
      rolename: role,
    }
    this.UpdateForm.controls['id'].setValue(ids);
    this.UpdateForm.controls['fullName'].setValue(name);
    this.UpdateForm.controls['email'].setValue(mail);
    this.UpdateForm.controls['phone'].setValue(mobile);
    this.UpdateForm.controls['imagepath'].setValue(image);
    this.UpdateForm.controls['rolename'].setValue(role);
    this.userservice.getRole();
    this.dialog.open(this.callUpdateDialog)
  }
}

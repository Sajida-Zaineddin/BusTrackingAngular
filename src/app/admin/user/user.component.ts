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

  CreateForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    imagepath: new FormControl(),
    rolename: new FormControl('', Validators.required)
  })

  UpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    imagepath: new FormControl(),
    rolename: new FormControl('', Validators.required)
  })

  constructor(private dialog:MatDialog, public user:UserService) { }

  ngOnInit(): void {
    this.user.getUsers();
  }

  save()
  {
    console.log(this.CreateForm.value);
    this.user.createUser(this.CreateForm.value);
    window.location.reload();
  }

  update()
  {
    this.user.updateUser(this.UpdateForm.value);
    window.location.reload();
  }

  uploadFile(file:any)
  {
    if(file.length===0)
    return;
    const uploadfile=<File>file[0];
    const formData=new FormData();
    formData.append('file',uploadfile,uploadfile.name);
    this.user.uploadAttachment(formData);
  }

  openCreatedialog() {
    this.dialog.open(this.callCreateDialog)
  }

  openDeleteDialog(userId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.user.deleteUser(userId);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })
  }

  openUpdateDialog(id: any, name: any, mail: any, mobile: any, image: any, role: any) {
    this.userValues = {
      id: id,
      fullName: name,
      email: mail,
      phone: mobile,
      imagepath: image,
      rolename: role,
    }
    this.UpdateForm.controls['id'].setValue(id);
    this.UpdateForm.controls['fullName'].setValue(name);
    this.UpdateForm.controls['email'].setValue(mail);
    this.UpdateForm.controls['phone'].setValue(mobile);
    this.UpdateForm.controls['imagepath'].setValue(image);
    this.UpdateForm.controls['rolename'].setValue(role);
    this.dialog.open(this.callUpdateDialog)
  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginMangeService } from 'src/app/Services/login-mange.service';

@Component({
  selector: 'app-login-manege-data',
  templateUrl: './login-manege-data.component.html',
  styleUrls: ['./login-manege-data.component.css']
})
export class LoginManegeDataComponent implements OnInit {

  constructor(private dialog: MatDialog, public loginManege:LoginMangeService) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>

  userValue:any = [];
  ngOnInit(): void {
    this.loginManege.getAll();
  }


  CreateForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    userid: new FormControl('', Validators.required)
  })

  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    username: new FormControl,
    password: new FormControl(),
    userid: new FormControl()
  })


  save() {
    console.log(this.CreateForm.value);
    this.loginManege.createLoginUser(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {  
    this.loginManege.getUsersName();  
    this.dialog.open(this.callCreateDialog)
  }

  openDeleteDialog(loginId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.loginManege.delete(loginId);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })
  }
  
  openUpdateDialog(id: any, uname: any, upass: any, uid: any,) {
    debugger
    this.userValue = {
      id: id,
      username: uname,
      password: upass,
      userid: uid,
    }
    this.updatForm.controls['id'].setValue(id); 
    this.updatForm.controls['userid'].setValue(uid); 
    this.loginManege.getUsersName();
    this.dialog.open(this.callUpdateDialog)
  }

  updateAboutusEditor() {
    this.loginManege.updateLoginUser(this.updatForm.value);
    window.location.reload();
  }
}

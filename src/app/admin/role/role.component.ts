import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private dialog: MatDialog, public role: RoleService) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>

  roleValues: any = {}

  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    rolename: new FormControl()
  })


  CreateForm: FormGroup = new FormGroup({
    rolename: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.role.getAll();
  }

  save() {
    console.log(this.CreateForm.value);
    this.role.createRole(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.role.getAll();
    this.dialog.open(this.callCreateDialog)
  }

  openDeleteDialog(busId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.role.delete(busId);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })

  }
  openUpdateDialog(id: any, rolename: any) {
    this.roleValues = {
      id: new FormControl(),
      rolename: new FormControl()
    }
    this.updatForm.controls['id'].setValue(id);
    this.updatForm.controls['rolename'].setValue(rolename);
    this.role.getAll();
    this.dialog.open(this.callUpdateDialog)
  }

  updateRoleEditor() {
    this.role.updateRole(this.updatForm.value);
    window.location.reload();
  }

  updateRole(){
    console.log("updatForm",this.updatForm.value);
    console.log("about",this.role);
    this.role.updateRole(this.updatForm.value);
    window.location.reload();
  }
}

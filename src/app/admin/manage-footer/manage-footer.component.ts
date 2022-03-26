import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FooterService } from 'src/app/Services/footer.service';

@Component({
  selector: 'app-manage-footer',
  templateUrl: './manage-footer.component.html',
  styleUrls: ['./manage-footer.component.css']
})
export class ManageFooterComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog! :TemplateRef<any>
  footerData: any = []
  
  UpdateForm:FormGroup=new FormGroup({
    id : new FormControl(),
    abouttext: new FormControl(),
    city:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),

 })

 CreateForm :FormGroup =new FormGroup({  
  abouttext:new FormControl('',Validators.required),
  city:new FormControl('',Validators.required),    
  phone:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),

})


  constructor(public home:FooterService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.home.getAll();
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


  openUpdateDialog(id1: any, abouttext1: any, city1: any, phone1: any,email1:any) {

    this.footerData = {
      id: id1,
      abouttext: abouttext1,
      city: city1,
      phone: phone1,
      email:email1

    }
    this.UpdateForm.controls['id'].setValue(id1);

    // this.home.getAll();

    this.dialog.open(this.callUpdateDailog)

  }

  update() {
    this.home.update(this.UpdateForm.value);
    window.location.reload();

  }


}

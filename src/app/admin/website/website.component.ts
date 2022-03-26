import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WebsiteService } from 'src/app/services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>

  website: any = {}

  constructor(private dialog: MatDialog, public webService: WebsiteService) { }

  CreateForm: FormGroup = new FormGroup({
    websitename: new FormControl('', Validators.required),
    websitelogo: new FormControl(),
    contactusid: new FormControl('', Validators.required),
    aboutusid: new FormControl('', Validators.required)
  })

  UpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    websitename: new FormControl(),
    websitelogo: new FormControl(),
    contactusid: new FormControl(),
    aboutusid: new FormControl()
  })

  ngOnInit(): void {
    this.webService.getWebsites();
  }

  save() {
    console.log(this.CreateForm.value);
    this.webService.createWebsite(this.CreateForm.value);
    window.location.reload();
  }

  updateWeb() {
    this.webService.updateWebsite(this.UpdateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.webService.getContactId();
    this.webService.getAboutId();
    this.dialog.open(this.callCreateDialog)
  }

  openUpdateDialog(ids: any, name: any, image: any, cId: any, aId: any) {
    this.website = {
      id: ids,
      websitename: name,
      websitelogo: image,
      contactusid: cId,
      aboutusid: aId
    }
    console.log("website.websitelogo", this.website.imagepath);
    this.UpdateForm.controls['id'].setValue(ids);
    this.UpdateForm.controls['websitename'].setValue(name);
    this.UpdateForm.controls['websitelogo'].setValue(image);
    this.UpdateForm.controls['contactusid'].setValue(cId);
    this.UpdateForm.controls['aboutusid'].setValue(aId);
    this.webService.getContactId();
    this.webService.getAboutId();
    this.dialog.open(this.callUpdateDialog)
  }

  openDeleteDialog(id: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.webService.deleteWebsite(id);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })
  }

  uploadFile(file: any) {
    if (file.length === 0) {
      return;
    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.webService.uploadAttachment(fromData);
  }
}

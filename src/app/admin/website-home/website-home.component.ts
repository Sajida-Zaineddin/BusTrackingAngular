import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WebsiteHomeService } from 'src/app/services/website-home.service';

@Component({
  selector: 'app-website-home',
  templateUrl: './website-home.component.html',
  styleUrls: ['./website-home.component.css']
})
export class WebsiteHomeComponent implements OnInit {

  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
 
  web: any = {}

  constructor(private dialog: MatDialog, public webHomeService: WebsiteHomeService) { }

  CreateForm: FormGroup = new FormGroup({
    titel: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    imagepath: new FormControl(),
    websiteid: new FormControl('', Validators.required)
  })

  UpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    titel: new FormControl(),
    text: new FormControl(),
    imagepath: new FormControl(),
    websiteid: new FormControl()
  })

  ngOnInit(): void {
    this.webHomeService.getWebHome();
  }

  save() {
    console.log(this.CreateForm.value);
    this.webHomeService.createWebHome(this.CreateForm.value);
    window.location.reload();
  }

  updateWebHome() {
    this.webHomeService.updateWebHome(this.UpdateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.webHomeService.getWebId();
    this.dialog.open(this.callCreateDialog)
  }

  openUpdateDialog(ids: any, tit: any, txt: any, image: any, wid: any) {
    this.web = {
      id: ids,
      titel: tit,
      text: txt,
      imagepath: image,
      websiteid: wid
    }
    console.log("web.imagepath", this.web.imagepath);
    this.UpdateForm.controls['id'].setValue(ids);
    this.UpdateForm.controls['titel'].setValue(tit);
    this.UpdateForm.controls['text'].setValue(txt);
    this.UpdateForm.controls['imagepath'].setValue(image);
    this.UpdateForm.controls['websiteid'].setValue(wid);
    this.webHomeService.getWebId();
    this.dialog.open(this.callUpdateDialog)
  }

  openDeleteDialog(webHomeId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.webHomeService.deleteWebHome(webHomeId);
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
    this.webHomeService.uploadAttachment(fromData);
  }
}

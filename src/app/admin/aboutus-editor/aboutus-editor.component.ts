import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutusEditorService } from 'src/app/Services/aboutus-editor.service';


@Component({
  selector: 'app-aboutus-editor',
  templateUrl: './aboutus-editor.component.html',
  styleUrls: ['./aboutus-editor.component.css']
})
export class AboutusEditorComponent implements OnInit {

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>



  about: any = {}

  constructor(private dialog: MatDialog, public aboutuseEitor: AboutusEditorService) { }



  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    titel: new FormControl(),
    text: new FormControl(),
    imagepath: new FormControl(),
    aboutid: new FormControl()
  })


  CreateForm: FormGroup = new FormGroup({

    titel: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),

    imagepath: new FormControl(),
    aboutid: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    this.aboutuseEitor.getAll();

  }


  save() {
    console.log(this.CreateForm.value);
    
    this.aboutuseEitor.createAboutusEditor(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.aboutuseEitor.getAabouusId();
    this.dialog.open(this.callCreateDialog)

  }

  openDeleteDialog(Aboutusid: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.aboutuseEitor.delete(Aboutusid);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");

      }
    })

  }
  openUpdateDialog(id: any, title: any, txt: any, imagename2: any, aid: any) {

    this.about = {
      id: id,
      titel: title,
      text: txt,
      imagepath: imagename2,
      aboutid: aid

    }
    console.log("about.imagepath", this.about.imagepath);
    this.updatForm.controls['id'].setValue(id);
    this.updatForm.controls['imagepath'].setValue(imagename2);
    this.updatForm.controls['aboutid'].setValue(aid);
    this.aboutuseEitor.getAabouusId();
    this.dialog.open(this.callUpdateDialog)

  }

  uploadFile(file: any) {
    if (file.length === 0) {
      return;

    }
    let fileUpload = <File>file[0];
    // file[0]:'angular.png';
    const fromData = new FormData();
    fromData.append('file', fileUpload, fileUpload.name);
    this.aboutuseEitor.uploadAttachment(fromData);

  }

  updateAboutusEditor() {
    this.aboutuseEitor.updateAboutusEditor(this.updatForm.value);
    window.location.reload();

  }
}

import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AboutusService } from 'src/app/services/aboutus.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>



  about: any = {}

  constructor(private dialog: MatDialog, public home: AboutusService) { }



  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    information: new FormControl(),
    imagepath: new FormControl()   
  })


  CreateForm :FormGroup =new FormGroup({
  
    title:new FormControl('',Validators.required),
    information:new FormControl('',Validators.required),
    
    imagepath:new FormControl()
  })
  ngOnInit(): void {
    this.home.getAll();
  }


  save(){
    this.home.createAboutus(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.dialog.open(this.callCreateDialog)

  }

  openDeleteDialog(Aboutusid: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.home.delete(Aboutusid);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");

      }
    })

  }
  openUpdateDialog(id: any, title: any, info: any, imagename2: any) {
    console.log("openUpdateDialog",id,title,info, imagename2);

    this.about = {
      id: id,
      title: title,
      information: info,
      imagepath: imagename2
    }
    console.log("about.imagepath",this.about.imagepath);
    this.updatForm.controls['id'].setValue(id);
    this.updatForm.controls['imagepath'].setValue(imagename2);

    this.dialog.open(this.callUpdateDialog)

  }

  uploadFile(file:any){
    if(file.length===0){
      return ;

    }
    let fileUpload=<File>file[0];
    // file[0]:'angular.png';
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.home.uploadAttachment(fromData);
    
  }

  updateCourse(){
    console.log("updatForm",this.updatForm.value);
    console.log("about",this.about);

    this.home.updateAboutus(this.updatForm.value);
    window.location.reload();

  }





}



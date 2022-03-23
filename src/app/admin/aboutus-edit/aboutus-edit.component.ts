import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-aboutus-edit',
  templateUrl: './aboutus-edit.component.html',
  styleUrls: ['./aboutus-edit.component.css']
})
export class AboutusEditComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('search') search!: TemplateRef<any>

  about: any = {}
  searchValue:any = 0;
  constructor(private dialog: MatDialog, public home: HomeServiceService) { }



  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    information: new FormControl(),
    imagepath: new FormControl()   
  })

  ngOnInit(): void {
    this.home.getAll();
  }

  openCreatedialog() {
    this.dialog.open(CreateComponent)

  }

  openDeleteDialog(courseid: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.home.delete(courseid);
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

    this.home.updateCourse(this.updatForm.value);
    window.location.reload();

  }



  InputValue(ev:any){

    this.searchValue=ev.target.value;
    console.log(this.searchValue);
  }

  searchAbout(){
    console.log(this.searchValue);
    
    this.home.sreachv(this.searchValue);
    this.dialog.open(this.search)

  }

}


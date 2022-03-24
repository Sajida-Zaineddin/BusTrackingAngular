import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>
  @ViewChild('callUpdateDailog') callUpdateDailodg! :TemplateRef<any>
  testtemonialsData: any = {}


  UpdateForm:FormGroup=new FormGroup({
    id:new FormControl(),   
    status :new FormControl()
 })
  
 CreateForm :FormGroup =new FormGroup({  
  name:new FormControl('',Validators.required),
  feedback:new FormControl('',Validators.required),    
  imagepath:new FormControl(),
  status:new FormControl('',Validators.required)
})


    constructor(private dialog:MatDialog, public testimonial:TestimonialService) { }
    
  
    ngOnInit(): void {
      this.testimonial.gettestimonials();
    }
  
 
    openCreatedialog() {
      this.testimonial.gettestStatus();
      this.dialog.open(this.callCreateDailog)
  
    }
  
    openUpdateDailog(ids: any, namee: any, rev: any,stat:any ,imagename2: any) {
      
      this.testimonial.gettestStatus();
      this.testtemonialsData = {
        id: ids,
        name: namee,
        feedback: rev,
        imagepath: imagename2,
        status:stat
      }
      this.UpdateForm.controls['id'].setValue(ids);
      this.dialog.open(this.callUpdateDailog)
  
    }

    uploadFile(file:any){
      if(file.length===0)
      return;
      const uploadfile=<File>file[0];
      // {
      //   file[0]:'photo1.png',
      // }
      const formData=new FormData();
      formData.append('file',uploadfile,uploadfile.name);
      this.testimonial.uploadAttachment(formData);
    }
  
    update()
    {
      console.log( this.testimonial.test);
      
      this.testimonial.updateTestimonial(this.UpdateForm.value);
    }

  
  
    save(){
      console.log(this.CreateForm.value);
      
      this.testimonial.createTestimonial(this.CreateForm.value);
  
    }


    // openDeleteDialog(Aboutusid: any) {
    //   const dialogRef = this.dialog.open(this.callDeleteDialog);
    //   dialogRef.afterClosed().subscribe((res) => {
    //     if (res !== undefined) {
    //       if (res == "yes") {
    //         this.home.delete(Aboutusid);
    //         window.location.reload();
    //       }
    //       else if (res == "no")
    //         console.log("Thank you ");
  
    //     }
    //   })
  
    // }
  }
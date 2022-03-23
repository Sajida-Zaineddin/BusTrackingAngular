import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HomeServiceService } from 'src/app/Service/home-service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { CTestComponent } from '../c-test/c-test.component';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog! :TemplateRef<any>
  testtemonialsData: any = {}


  UpdateForm:FormGroup=new FormGroup({
    id:new FormControl(),   
    status :new FormControl()
 })
  
   

    constructor(private dialog:MatDialog, public testimonial:HomeServiceService) { }
    
  
    ngOnInit(): void {
      this.testimonial.gettestimonials();
    }
  
 
    openCreatedialog() {
      this.dialog.open(CTestComponent)
  
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

  
  }
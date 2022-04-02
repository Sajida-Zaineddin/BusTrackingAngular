import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonialService } from '../Services/testimonial.service';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public testomonal:TestimonialService) { }



  CreateForm :FormGroup =new FormGroup({
  
    name:new FormControl('',Validators.required),
    feedback:new FormControl('',Validators.required),
    
    imagepath:new FormControl( )
  })




  ngOnInit(): void {
    this.testomonal.gettestimonials();     
 
    console.log('test',this.testomonal.testimonialsToShow);
    
  }





  
  uploadFile(file:any){
    if(file.length===0){
      return ;

    }
    let fileUpload=<File>file[0];
    // file[0]:'angular.png';
    const fromData=new FormData();
    fromData.append('file',fileUpload,fileUpload.name);
    this.testomonal.uploadAttachment(fromData);
    
  }


  save(){
    this.testomonal.createTestimonial(this.CreateForm.value);
  }
}

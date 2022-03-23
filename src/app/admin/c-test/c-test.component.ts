import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeServiceService } from 'src/app/Service/home-service.service';

@Component({
  selector: 'app-c-test',
  templateUrl: './c-test.component.html',
  styleUrls: ['./c-test.component.css']
})
export class CTestComponent implements OnInit {

  constructor( public home:HomeServiceService) { }

  ngOnInit(): void {
    this.home.gettestStatus();
  }

  CreateForm :FormGroup =new FormGroup({  
    name:new FormControl('',Validators.required),
    feedback:new FormControl('',Validators.required),    
    imagepath:new FormControl(),
    status:new FormControl('',Validators.required)
  })

 

  uploadFile(file:any){
    if(file.length===0)
    return;
    const uploadfile=<File>file[0];
    // {
    //   file[0]:'photo1.png',
    // }
    const formData=new FormData();
    formData.append('file',uploadfile,uploadfile.name);
    this.home.uploadAttachment(formData);
  }

  save(){
    console.log(this.CreateForm.value);
    
    this.home.createTestimonial(this.CreateForm.value);

  }

}

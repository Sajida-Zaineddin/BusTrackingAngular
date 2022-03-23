import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeServiceService } from 'src/app/Service/home-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private home:HomeServiceService) { }

    CreateForm :FormGroup =new FormGroup({
  
    title:new FormControl('',Validators.required),
    information:new FormControl('',Validators.required),
    
    imagepath:new FormControl()
  })

  ngOnInit(): void {
  }

  save(){
    this.home.createCourse(this.CreateForm.value);
    window.location.reload();
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
}

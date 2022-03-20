import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

data:any=[{}]
bus:any=[]
  constructor(private router:Router,private http:HttpClient) { }

  getAll(){
    //show spinner 
   // this.spinner.show();
    //hits api 
    this.http.get('https://localhost:44346/api/Bus/GetAll').subscribe((res)=>{
      this.data=res;
     // this.spinner.hide();
     // this.toastr.success('Data Retrieved !!')
    }, err=>{
      console.log("no data found")
      //hide spinner 
    //  this.spinner.hide(); 
       //Toastr
     // this.toastr.error(err.message);
     // this.toastr.error(err.status);
    })  
  }

  createBus(data:any){
   // this.spinner.show();
   
  //  data.imagename=this.display_Image;
    this.http.post('https://localhost:44346/api/Bus/Create',data)
    .subscribe((res:any)=>{

     // this.spinner.hide();
  //    this.toastr.success('Saved Successfully :) ')
    }, err=>{
    //  this.spinner.hide();
    //  this.toastr.error(err.message , err.status)
    })
  }

    updateBus(body:any){
      //body.imagename=this.display_Image;
      this.http.put('https://localhost:44346/api/Bus/Update',body).subscribe((res)=>{
       // this.toastr.success('Updated Successfully :) ')
      },err=>{
     //   this.toastr.error('something error ');
      })
  }

  delete(id:number){
    this.http.delete('https://localhost:44346/api/Bus/Delete/'+id).subscribe((res)=>{
     // this.toastr.success('Deleted Successfully :) ')
    },err=>{
     // this.toastr.error('something error ');
    })

  }
  }

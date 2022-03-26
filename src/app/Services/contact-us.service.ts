import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactus:any=[];
  constructor(private http:HttpClient) { }
  getAll(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/Contactus').subscribe((res)=>{
      this.contactus=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }
  create(contactus:any){
    //  this.spinner.show();
     // body.imagename=this.display_Image;
      this.http.post('https://localhost:44346/api/Contactus/CreateContactus/',contactus).subscribe((res)=>{
        debugger;
      //  this.spinner.hide();
       // this.toastr.success('saved Successfully :)');
      },error=>{
       // this.spinner.hide();
       // this.toastr.error(error.status,error.message);
      })
    }
    update(contactus:any){
    //  body.imagename=this.display_Image;
   
      this.http.put('https://localhost:44346/api/Contactus/UpdateContactus/',contactus).subscribe((res)=>{
      //  this.toastr.success('updated Successfully :)');
  
      },err=>{
      //  this.toastr.error(err.status,err.message);
      })
  
    }   
    delete(id:number){
      this.http.delete('https://localhost:44346/api/Contactus/delete/'+id).subscribe((res)=>{
       // this.toastr.success('Deleted Successfully :)');
      },err=>{
      //  this.toastr.error(err.status,err.message);
      })
    }
}

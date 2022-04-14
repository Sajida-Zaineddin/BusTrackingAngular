import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendaceStatusService {
  attendancestatus:any=[];
  constructor(private http:HttpClient) {}
  getAll(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44320/api/course').subscribe((res)=>{
      this.attendancestatus=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }

  create(attendancestatus:any){
    //  this.spinner.show();
     // body.imagename=this.display_Image;
      this.http.post('https://localhost:44320/api/course/',attendancestatus).subscribe((res)=>{
        debugger;
      //  this.spinner.hide();
       // this.toastr.success('saved Successfully :)');
      },error=>{
       // this.spinner.hide();
       // this.toastr.error(error.status,error.message);
      })
    }

    update(attendancestatus:any){
      //  body.imagename=this.display_Image;
        this.http.put('https://localhost:44320/api/course/',attendancestatus).subscribe((res)=>{
        //  this.toastr.success('updated Successfully :)');
        },err=>{
        //  this.toastr.error(err.status,err.message);
        })
      } 
      
      delete(id:number){
        this.http.delete('https://localhost:44320/api/course/'+id).subscribe((res)=>{
         // this.toastr.success('Deleted Successfully :)');
        },err=>{
        //  this.toastr.error(err.status,err.message);
        })
      }
}

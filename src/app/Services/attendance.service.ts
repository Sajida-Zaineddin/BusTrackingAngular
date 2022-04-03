import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  attendance:any=[];
  attendance1:any=[];
  status:any=[];
  name:any=[];
  busnumber1:any=[];
  students:any=[];

  constructor(private http:HttpClient, private spinner :NgxSpinnerService,private toastr:ToastrService) { }
  getAll(){
    
   this.spinner.show();
    
      this.http.get('https://localhost:44346/api/attendance/getall').subscribe((res)=>{
      this.attendance=res;
     this.spinner.hide();
    this.toastr.success('Data Retrieved !!');
    },err=>{
     this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

  GETBUSNUMBER(){
     
    this.spinner.show();
    
       this.http.get('https://localhost:44346/api/attendance/GetBusNum').subscribe((res)=>{
       this.busnumber1=res;
      this.spinner.hide();
    this.toastr.success('Data Retrieved !!');
     },err=>{
    this.spinner.hide();
       this.toastr.error(err.message, err.status);
     })
   }
   
  search(name:any){
    this.spinner.show();
      this.http.post('https://localhost:44346/api/student/SearchStudent/',name).subscribe((res)=>{
        this.name=res;
      this.spinner.hide();
       this.toastr.success('saved Successfully :)');
      },error=>{
       this.spinner.hide();
       this.toastr.error(error.status,error.message);
      })
    }
 
  GETATTENDANCESTATUS(){
     
this.spinner.show();
    
      this.http.get('https://localhost:44346/api/attendance/GetAttendance').subscribe((res)=>{
      this.status=res;
  this.spinner.hide();
 this.toastr.success('Data Retrieved !!');
    },err=>{
   this.spinner.hide();
  this.toastr.error(err.message, err.status);
    })
  }
  
  GETSTUDENTNAME(){
    
   this.spinner.show();
    
      this.http.get('https://localhost:44346/api/attendance/GetStudent').subscribe((res)=>{
      this.name=res;
  this.spinner.hide();
   this.toastr.success('Data Retrieved !!');
    },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
    })
  }
  

GetStudentList(){
    
this.spinner.show();
     
      this.http.get('https://localhost:44346/api/bus/GetStudentList').subscribe((res)=>{
      this.students=res;
    this.spinner.hide();
     this.toastr.success('Data Retrieved !!');
    },err=>{
   this.spinner.hide();
     this.toastr.error(err.message, err.status);
    })
  }
  
  
  create(attendance:any){
    this.spinner.show();
     
      this.http.post('https://localhost:44346/api/attendance/create/',attendance).subscribe((res)=>{

       this.spinner.hide();
       this.toastr.success('saved Successfully :)');
      },error=>{
       this.spinner.hide();
       this.toastr.error(error.status,error.message);
      })
    }
    update(attendance1:any){
     
        this.http.put('https://localhost:44346/api/attendance/update/',attendance1).subscribe((res)=>{
       this.toastr.success('updated Successfully :)');
    
        },err=>{
        this.toastr.error(err.status,err.message);
        })
    
      } 
      delete(id:number){
        this.http.delete('https://localhost:44346/api/attendance/delete/'+id).subscribe((res)=>{
       this.toastr.success('Deleted Successfully :)');
        },err=>{
         this.toastr.error(err.status,err.message);
        })
      } 
      sendEmail(){
        this.http.delete('https://localhost:44346/api/attendance/SendEmail').subscribe((res)=>{
       this.toastr.success('sent Successfully :)');
        },err=>{
         this.toastr.error(err.status,err.message);
        })
      }
}

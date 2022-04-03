import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendaceStatusService {
  attendancestatus:any=[];
  constructor(private http:HttpClient) {}
  GetAttendance(){
    //show spinner 
   // this.spinner.show();
    //hits Api 
      this.http.get('https://localhost:44346/api/attendance/GetAttendance').subscribe((res)=>{
      this.attendancestatus=res;
     // this.spinner.hide();
    //  this.toastr.success('Data Retrieved !!');
    },err=>{
     // this.spinner.hide();
     // this.toastr.error(err.message, err.status);
    })
  }

}

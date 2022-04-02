import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  busesRoute:any = [];
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }


  
  allStudents:any=[];
  allTeachers:any=[];
  allDrivers:any=[];
 


  getAllBusesRoute() {   
    this.http.get('https://localhost:44346/api/route/GetAll').subscribe((res) => {
      this.busesRoute = res;   
    }, err => {    
      this.toastr.error('Error ')
    })
  }

  getAllStudentsData() {   
    this.http.get('https://localhost:44346/api/student/GetAll/').subscribe((res) => {
      this.allStudents=res
  
    }, err => {    
      this.toastr.error('Error ')
    })
    
  }
  getAllTeachersData() {   
    this.http.get('https://localhost:44346/api/user/GetAllTeachers/').subscribe((res) => {
      this.allTeachers=res
  
    }, err => {    
      this.toastr.error('Error ')
    })
    
  }
  getAllDriversData() {   
    this.http.get('https://localhost:44346/api/user/GetAllDrivers/').subscribe((res) => {
      this.allDrivers=res
  
    }, err => {    
      this.toastr.error('Error ')
    })
    
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutusPAgeService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  teachers: any = [];
  data:any=[];

  getAllTeachers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/User/GetAllTeachers/').subscribe((res) => {
      this.teachers = res;
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
  }

  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Aboutus').subscribe((res) => {
      this.data = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error(err.message, err.status)
    })
  }
}

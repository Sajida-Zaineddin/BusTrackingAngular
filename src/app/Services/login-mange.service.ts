import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginMangeService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  data: any = []
  allUsers: any = [];

  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/login/GetAllUsersWithNames/').subscribe((res) => {
      this.data = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  getUsersName() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/user/GetAll/').subscribe((res) => {
      this.allUsers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  
  createLoginUser(data: any) {
    this.spinner.show(); 
    this.http.post('https://localhost:44346/api/login/CreateLoginUser/', data)
      .subscribe((res: any) => {
        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
    }


  delete(id: number) {
    this.http.delete('https://localhost:44346/api/login/delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })
  }

  updateLoginUser(body: any) { 
    this.http.put('https://localhost:44346/api/login/UpdateLoginUser/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })
  }
}

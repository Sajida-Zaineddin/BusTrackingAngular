import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  display_Image: any;
  data: any = []
  results: any = [];
  user: any = [];


   getUserRole() {
    this.http.get('https://localhost:44346/api/user/GetRole')
      .subscribe((res) => {
        console.log(res)
        this.user = res;
        this.toastr.success('Successfully :) ')
      }, err => {
        this.toastr.error('Something Error ');
      })

    console.log(this.user);
  }

  getUsers() {
    this.http.get('https://localhost:44346/api/user/GetAll')
      .subscribe((res) => {
        console.log(res)
        this.data = res;
        this.toastr.success('Successfully :) ')
      }, err => {
        this.toastr.error('something error ');
      })

    console.log(this.data);
  }

  createUser(data: any) {
    this.spinner.show();

    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44346/api/user/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }


  updateUser(body: any) {

    this.http.put('https://localhost:44346/api/user/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('Something Error ');
    })
  }

  
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44346/api/user/UploadImage/', file)
      .subscribe((res: any) => {
        if (res)
          console.log(res);
        this.display_Image = res.imagepath;
      }, err => {
        this.toastr.error(err.message, err.status);
      })
  }
}


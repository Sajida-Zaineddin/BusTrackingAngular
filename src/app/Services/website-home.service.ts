import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WebsiteHomeService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  display_Image: any;
  data: any = []
  webId: any = [];

  getWebHome() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/WebsiteHome/GetAll/').subscribe((res) => {
      this.data = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  getWebId() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Website/GetAll/').subscribe((res) => {
      this.webId = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      // this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  createWebHome(data: any) {
    this.spinner.show();
    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44346/api/WebsiteHome/Create/', data)
      .subscribe((res: any) => {
        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }

  updateWebHome(body: any) {
    if (this.display_Image != undefined) {
      body.imagepath = this.display_Image;
    }
    this.http.put('https://localhost:44346/api/WebsiteHome/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })
  }

  deleteWebHome(id: number) {
    this.http.delete('https://localhost:44346/api/WebsiteHome/Delete/'+ id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })
  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44346/api/WebsiteHome/UploadImage/', file)
      .subscribe((res: any) => {
        if (res)
          console.log(res);
        this.display_Image = res.imagepath;
      }, err => {
        this.toastr.error(err.message, err.status);
      })
  }
}
